"""
Straighten the hand-traced territory outlines.

`city_map_geometry.json` was traced from a JPEG of the in-game city map. The
trace is blocky in the right places, but it is not clean:

  * "vertical" borders drift by 1-5 px from top to bottom,
  * "horizontal" borders drift by 1-4 px from left to right,
  * right-angle corners are rounded off with 2-6 px chamfer steps,
  * the two polygons that share a border sit 2-6 px apart, so each neighbour
    strokes its own slightly different line.

Stroked as-is, that reads as a blurred / doubled border. This module turns the
trace into a clean rectilinear partition:

  1. collapse the tiny chamfer and jitter edges into single corners,
  2. group edges that form one shared border (parallel, overlapping, close)
     and give the whole group one exact coordinate,
  3. force every remaining near-axis edge to be *exactly* vertical/horizontal,
  4. drop duplicate and collinear vertices.

`border_path()` then emits one SVG path with every unique border segment drawn
exactly once (collinear overlapping intervals are merged), so the browser
paints a single crisp stroke instead of two antialiased half-strokes.

The traced source also has one genuine gap: the little step of the orange
"Timber Output 10%" cell (x 433..466, y 303..329) was never traced, so the
finished map would show a black hole there. `patch_gaps()` extends that cell
out to the exact borders of its neighbours, and `validate()` now fails if any
interior hole is left.

Run standalone for a validation report:  python scripts/rectify_city_map.py
"""

import os
import sys
from collections import defaultdict, deque

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GEOMETRY = os.path.join(ROOT, "scripts", "city_map_geometry.json")

# An edge shorter than this in BOTH axes is a traced corner/jitter, not a border.
CORNER = 7
# Two parallel edges this close, overlapping this much, are one shared border.
# The traced gap between neighbours is 2-6 px, so 10 px catches the pairs; a
# 2 px overlap is enough once the chamfers have been collapsed.
SHARE_TOL = 10
SHARE_OVERLAP = 2

# The one gap in the source trace. C24 is the orange "Timber Output 10%" cell;
# its small lower step was traced as a detached zigzag, leaving x 433..466 /
# y 303..329 uncovered. C27 ends exactly at x=433 and C33 starts exactly at
# y=329, so the gap is simply the missing part of C24. Replacing the zigzag
# with a clean right-angle step restores the cell without touching its neighbours.
GAP_FIX = {
    "C24": {
        "old": [(466, 303), (466, 315), (458, 315), (458, 329)],
        "new": [(433, 303), (433, 329)],
    }
}


class UF:
    def __init__(self, n):
        self.p = list(range(n))

    def find(self, x):
        while self.p[x] != x:
            self.p[x] = self.p[self.p[x]]
            x = self.p[x]
        return x

    def union(self, a, b):
        a, b = self.find(a), self.find(b)
        if a != b:
            self.p[b] = a


def classify(a, b):
    dx, dy = b[0] - a[0], b[1] - a[1]
    ax, ay = abs(dx), abs(dy)
    if ax <= CORNER and ay <= CORNER:
        return "corner"
    if ay >= 2 * ax:
        return "v"
    if ax >= 2 * ay:
        return "h"
    return "diag"


def area(poly):
    return abs(
        sum(x1 * y2 - x2 * y1 for (x1, y1), (x2, y2) in zip(poly, poly[1:] + poly[:1]))
    ) / 2


def clean(poly):
    """Drop consecutive duplicates and vertices lying on a straight run."""
    out = []
    for p in poly:
        if not out or p != out[-1]:
            out.append(tuple(p))
    if len(out) > 1 and out[0] == out[-1]:
        out.pop()
    changed = True
    while changed and len(out) >= 3:
        changed = False
        keep = []
        n = len(out)
        for i, p in enumerate(out):
            a, b = out[i - 1], out[(i + 1) % n]
            cross = (p[0] - a[0]) * (b[1] - p[1]) - (p[1] - a[1]) * (b[0] - p[0])
            dot = (p[0] - a[0]) * (b[0] - p[0]) + (p[1] - a[1]) * (b[1] - p[1])
            if cross == 0 and dot >= 0:
                changed = True
                continue
            keep.append(p)
        out = keep
    return out


def collapse_corners(poly):
    """Merge the two ends of every tiny traced chamfer into one corner."""
    n = len(poly)
    uf = UF(n)
    for i, (a, b) in enumerate(zip(poly, poly[1:] + poly[:1])):
        if classify(a, b) == "corner":
            uf.union(i, (i + 1) % n)
    groups = defaultdict(list)
    for i, p in enumerate(poly):
        groups[uf.find(i)].append(p)
    out = []
    for i in range(n):
        g = groups[uf.find(i)]
        out.append(
            (
                int(round(sum(p[0] for p in g) / len(g))),
                int(round(sum(p[1] for p in g) / len(g))),
            )
        )
    return clean(out)


def snap_diagonals(poly):
    """Turn the last few traced chamfers into a clean right-angle step."""
    out = []
    for a, b in zip(poly, poly[1:] + poly[:1]):
        out.append(a)
        if a[0] != b[0] and a[1] != b[1]:
            out.append((a[0], b[1]))
    return clean(out)


def unify_seams(polys, tol=3):
    """Snap complementary collinear edges to one exact coordinate.

    The first pass unifies edges that genuinely overlap (two neighbours
    tracing the same border). A few seams are instead traced as *consecutive*
    pieces 1-3 px apart — e.g. x=484 above and x=485 below, or y=3 for the
    left half of the top edge and y=4 for the right half. Left alone they read
    as a 1 px step / a hairline gap. Group edges whose intervals touch, give
    each group one coordinate, then re-project every vertex onto those lines.
    """
    edges = []
    by_tid = defaultdict(list)
    for tid, poly in polys.items():
        n = len(poly)
        for i, (a, b) in enumerate(zip(poly, poly[1:] + poly[:1])):
            kind = "v" if a[0] == b[0] else ("h" if a[1] == b[1] else None)
            if not kind:
                continue
            e = {
                "tid": tid, "i": i, "n": n, "kind": kind,
                "coord": a[0] if kind == "v" else a[1],
                "lo": min(a[1], b[1]) if kind == "v" else min(a[0], b[0]),
                "hi": max(a[1], b[1]) if kind == "v" else max(a[0], b[0]),
                "idx": len(edges),
            }
            e["len"] = e["hi"] - e["lo"]
            edges.append(e)
            by_tid[tid].append(e)

    uf = UF(len(edges))
    for kind in ("v", "h"):
        group = [e for e in edges if e["kind"] == kind]
        for i, a in enumerate(group):
            for b in group[i + 1:]:
                if abs(a["coord"] - b["coord"]) > tol:
                    continue
                # touching, overlapping, or separated by at most tol px
                if max(a["lo"], b["lo"]) - min(a["hi"], b["hi"]) > tol:
                    continue
                uf.union(a["idx"], b["idx"])

    sums = defaultdict(lambda: [0.0, 0.0, [], []])
    for e in edges:
        g = uf.find(e["idx"])
        s = sums[g]
        w = max(1.0, e["len"])
        s[0] += e["coord"] * w
        s[1] += w
        s[2].append(e["coord"])
    reps = {}
    for g, (total, weight, coords, _) in sums.items():
        # A chain that wandered farther than tol is not one straight seam.
        reps[g] = int(round(total / weight)) if max(coords) - min(coords) <= tol else None

    out = {}
    for tid, poly in polys.items():
        n = len(poly)
        cx, cy, wx, wy = [None] * n, [None] * n, [0.0] * n, [0.0] * n
        for e in by_tid[tid]:
            r = reps.get(uf.find(e["idx"]))
            if r is None:
                continue
            for j in (e["i"], (e["i"] + 1) % n):
                if e["kind"] == "v" and e["len"] > wx[j]:
                    cx[j], wx[j] = r, e["len"]
                elif e["kind"] == "h" and e["len"] > wy[j]:
                    cy[j], wy[j] = r, e["len"]
        out[tid] = clean([
            (cx[j] if cx[j] is not None else poly[j][0],
             cy[j] if cy[j] is not None else poly[j][1])
            for j in range(n)
        ])
    return out


def patch_gaps(polys):
    """Repair the holes that were already present in the traced source."""
    out = dict(polys)
    for tid, fix in GAP_FIX.items():
        poly = out.get(tid)
        if not poly:
            continue
        old, new, n = fix["old"], fix["new"], len(fix["old"])
        for i in range(len(poly)):
            if [tuple(poly[(i + j) % len(poly)]) for j in range(n)] == old:
                out[tid] = clean(list(poly[:i]) + new + list(poly[i + n:]))
                break
        else:
            raise ValueError("gap fix for %s no longer matches the geometry" % tid)
    return out


def interior_holes(polys):
    """Count 1px cells that no polygon covers but that are enclosed by the map.

    Polygon coverage is computed with an even-odd scanline; the outside is then
    flood-filled from the padded border, so edge notches are not mistaken for
    holes. This catches any gap the straightening or a future trace could open.
    """
    w = max(p[0] for poly in polys.values() for p in poly) + 2
    h = max(p[1] for poly in polys.values() for p in poly) + 2
    cov = [bytearray(w) for _ in range(h + 1)]
    for poly in polys.values():
        y0 = max(0, min(p[1] for p in poly))
        y1 = min(h, max(p[1] for p in poly) + 1)
        for y in range(y0, y1):
            yy = y + 0.5
            xs = []
            for a, b in zip(poly, poly[1:] + poly[:1]):
                if (a[1] <= yy) != (b[1] <= yy):
                    xs.append(a[0] + (yy - a[1]) * (b[0] - a[0]) / (b[1] - a[1]))
            xs.sort()
            for i in range(0, len(xs) - 1, 2):
                lo, hi = xs[i], xs[i + 1]
                for x in range(max(0, int(lo)), min(w, int(hi) + 1)):
                    if lo <= x + 0.5 < hi:
                        cov[y][x] = 1

    outside = [bytearray(w) for _ in range(h + 1)]
    q = deque([(0, 0)])
    outside[0][0] = 1
    while q:
        x, y = q.popleft()
        for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
            if 0 <= nx < w and 0 <= ny <= h and not cov[ny][nx] and not outside[ny][nx]:
                outside[ny][nx] = 1
                q.append((nx, ny))
    return sum(
        1
        for y in range(1, h)
        for x in range(1, w - 1)
        if not cov[y][x] and not outside[y][x]
    )


def rectify(trace):
    """Return {territory id: rectified polygon} plus a validation report."""
    polys = {t["id"]: collapse_corners(t["poly"]) for t in trace}
    edges = []
    by_territory = defaultdict(list)
    for tid, poly in polys.items():
        n = len(poly)
        for i, (a, b) in enumerate(zip(poly, poly[1:] + poly[:1])):
            kind = classify(a, b)
            e = {
                "tid": tid,
                "i": i,
                "n": n,
                "kind": kind,
                "a": a,
                "b": b,
                "idx": len(edges),
                "mean": (a[0] + b[0]) / 2 if kind == "v" else (a[1] + b[1]) / 2,
                "lo": min(a[1], b[1]) if kind == "v" else min(a[0], b[0]),
                "hi": max(a[1], b[1]) if kind == "v" else max(a[0], b[0]),
                "len": abs(a[1] - b[1]) if kind == "v" else abs(a[0] - b[0]),
            }
            edges.append(e)
            by_territory[tid].append(e)

    uf = UF(len(edges))
    for kind in ("v", "h"):
        group = [e for e in edges if e["kind"] == kind]
        for i, a in enumerate(group):
            for b in group[i + 1:]:
                if a["tid"] == b["tid"]:
                    continue
                if abs(a["mean"] - b["mean"]) > SHARE_TOL:
                    continue
                if min(a["hi"], b["hi"]) - max(a["lo"], b["lo"]) < SHARE_OVERLAP:
                    continue
                uf.union(a["idx"], b["idx"])
        # Consecutive axis-aligned edges inside one polygon are the same run.
        for es in by_territory.values():
            for e in es:
                if e["kind"] != kind:
                    continue
                for other in es:
                    if other["kind"] != kind:
                        continue
                    adjacent = (other["i"] + 1) % e["n"] == e["i"] or (
                        e["i"] + 1
                    ) % e["n"] == other["i"]
                    if adjacent:
                        uf.union(e["idx"], other["idx"])

    sums = defaultdict(lambda: [0.0, 0.0])
    for e in edges:
        if e["kind"] in ("v", "h"):
            g = uf.find(e["idx"])
            w = max(1.0, e["len"])
            sums[g][0] += e["mean"] * w
            sums[g][1] += w
    rep = {g: int(round(s / w)) for g, (s, w) in sums.items()}

    for e in edges:
        e["rep"] = rep.get(uf.find(e["idx"]), int(round(e["mean"])))

    result = {}
    for tid, poly in polys.items():
        n = len(poly)
        cx = [None] * n
        cy = [None] * n
        wx = [0.0] * n
        wy = [0.0] * n
        for e in by_territory[tid]:
            if e["kind"] not in ("v", "h"):
                continue
            for j in (e["i"], (e["i"] + 1) % n):
                if e["kind"] == "v" and e["len"] > wx[j]:
                    cx[j], wx[j] = e["rep"], e["len"]
                elif e["kind"] == "h" and e["len"] > wy[j]:
                    cy[j], wy[j] = e["rep"], e["len"]
        new = [
            (
                cx[j] if cx[j] is not None else poly[j][0],
                cy[j] if cy[j] is not None else poly[j][1],
            )
            for j in range(n)
        ]
        result[tid] = snap_diagonals(clean(new))

    result = unify_seams(patch_gaps(result))
    report = validate({t["id"]: t["poly"] for t in trace}, result)
    return result, report


def validate(before, after):
    problems = []
    ratios = []
    for tid, old in before.items():
        new = after[tid]
        a0, a1 = area(old), area(new)
        if len(new) < 3 or a1 < 100:
            problems.append("%s collapsed (%d pts, area %.0f)" % (tid, len(new), a1))
        if a0:
            ratios.append(abs(a1 - a0) / a0)
        for p, q in zip(new, new[1:] + new[:1]):
            # A short axis-aligned run is a perfectly crisp border; only a
            # leftover slanted step would still read as a smeared corner.
            if p[0] != q[0] and p[1] != q[1]:
                problems.append("%s has a slanted edge %s-%s" % (tid, p, q))
    kinds = defaultdict(int)
    for poly in after.values():
        for p, q in zip(poly, poly[1:] + poly[:1]):
            kinds["axis" if p[0] == q[0] or p[1] == q[1] else "slanted"] += 1
    holes = interior_holes(after)
    if holes:
        problems.append("%d uncovered interior px (a black gap in the map)" % holes)
    return {
        "territories": len(after),
        "edges": dict(kinds),
        "holes": holes,
        "max_area_change": round(max(ratios or [0]) * 100, 1),
        "avg_area_change": round(sum(ratios) / max(1, len(ratios)) * 100, 1),
        "problems": problems,
    }


def border_path(polys):
    """One SVG path: every unique border drawn once, axis lines merged."""
    vertical = defaultdict(list)
    horizontal = defaultdict(list)
    diagonals = set()
    for poly in polys.values():
        for a, b in zip(poly, poly[1:] + poly[:1]):
            if a[0] == b[0]:
                vertical[a[0]].append((min(a[1], b[1]), max(a[1], b[1])))
            elif a[1] == b[1]:
                horizontal[a[1]].append((min(a[0], b[0]), max(a[0], b[0])))
            else:
                diagonals.add((a, b) if a < b else (b, a))

    def merged(intervals):
        if not intervals:
            return []
        intervals.sort()
        out = [list(intervals[0])]
        for lo, hi in intervals[1:]:
            if lo <= out[-1][1] + 1:
                out[-1][1] = max(out[-1][1], hi)
            else:
                out.append([lo, hi])
        return out

    parts = []
    for x in sorted(vertical):
        for lo, hi in merged(vertical[x]):
            parts.append("M%d %dV%d" % (x, lo, hi))
    for y in sorted(horizontal):
        for lo, hi in merged(horizontal[y]):
            parts.append("M%d %dH%d" % (lo, y, hi))
    for a, b in sorted(diagonals):
        parts.append("M%d %dL%d %d" % (a[0], a[1], b[0], b[1]))
    return " ".join(parts)


def main():
    import json

    trace = json.load(open(GEOMETRY, encoding="utf-8"))
    polys, report = rectify(trace)
    print("rectified", report)
    path = border_path(polys)
    print("border path: %d segments, %d chars" % (path.count("M"), len(path)))
    if report["problems"]:
        print("PROBLEMS:")
        for p in report["problems"][:20]:
            print("  ", p)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
