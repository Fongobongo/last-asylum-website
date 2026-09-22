---
title: "How the game counts: diamonds and percentages"
description: "How the game counts speed-up prices, resource rates, crit chance and scouting costs is something players normally work out by trial. The page collects the parts of those …"
lang: fr
updated: "2026-09-19"
type: guide
---

> Reprise de la version anglaise ; chiffres vérifiés du client v1.0.87.
>
> Data verified against the game client (v1.0.87, source: [wiki-last-asylum.com](https://wiki-last-asylum.com/en/wiki/formulas)).


How the game counts speed-up prices, resource rates, crit chance and scouting costs is something players normally work out by trial. The page collects the parts of those calculations worth knowing, without deriving anything. Percentages of the same kind add together, while time is divided by the sum, which makes every further point of speed cut less time than the one before it.

## Diamond speed-ups get cheaper the longer the job

The diamond price per duration and the same price per hour:

| Duration | Diamonds | Per hour |
|---|---|---|
| 1 minute | 5 | 300 |
| 15 minutes | 55 | 220 |
| 1 hour | 187 | 187 |
| 8 hours | 1,194 | 149 |
| 1 day | 3,183 | 133 |
| 1 week | 18,072 | 108 |

Cost grows slower than time, so an hour of small top-ups costs three times an hour taken off a week-long job. Spending diamonds on small finishes is the worst rate.

## Resources per diamond

One diamond buys grain: 1,000, timber: 1,000, herbs: 600.

## Percentages add up, time divides

The rule sits behind every bonus in the game. All percentages of one kind simply add up: building, research, alliance technology, survivor, gear, VIP. Nothing multiplies anywhere, so +10% and +10% come to +20% rather than +21%.

What happens next differs, and that is where the trap sits. Applied to a quantity such as capacity, output or soldier count, the sum is added directly and the result is multiplied by one plus the sum. Applied to time the same sum divides, and the time is divided by one plus the sum. The table shows what a speed bonus is really worth.

| Total speed bonus | Times faster | Time remaining |
|---|---|---|
| +50% | 1.5 | 67% |
| +100% | 2 | 50% |
| +200% | 3 | 33% |
| +300% | 4 | 25% |
| +500% | 6 | 17% |

A non-obvious conclusion follows. The first hundred per cent of speed cuts half the time, the second hundred cuts another 17 points, the third another 8, and beyond that the gain is barely felt. Chasing speed forever is pointless, while reaching the first 100% almost always pays.

The sum has a hard floor as well, never dropping below -90%, however many slowdowns are piled on top.

## Small facts worth knowing

The remaining calculations fit into a line each, and they are worth knowing mostly for completeness.
- Base crit chance is 5%, then the attacker's crit is added and the target's resistance subtracted.
- Alliance size starts at 50 and grows by five per level.
- Scouting costs 1,000 plus a hundred per target level.
- Morale is clamped between 1 and 2, so it can double a fight at most.
- Arena points depend on the rating gap: beating a stronger opponent pays more.

