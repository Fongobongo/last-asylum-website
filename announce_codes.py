"""Announce newly added gift codes to a Telegram channel.

Called by GitHub Actions after update_data.py commits changes.
Compares codes in the regenerated giftcodes.ts against git HEAD~1;
posts any NEW codes to Telegram using TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID.
"""

import os
import re
import subprocess
import sys
import urllib.parse
import urllib.request

SITE_DATA = "site/src/data/giftcodes.ts"
TOKEN = os.environ.get("TELEGRAM_BOT_TOKEN", "")
CHAT_ID = os.environ.get("TELEGRAM_CHAT_ID", "")


def codes_from_text(text: str) -> set[str]:
    return set(re.findall(r"code: '([A-Z0-9]+)'", text))


def main():
    if not TOKEN or not CHAT_ID:
        print("Telegram credentials not set; skipping announcement")
        return

    new_text = open(SITE_DATA, encoding="utf-8").read()
    new_codes = codes_from_text(new_text)

    old_codes = set()
    try:
        result = subprocess.run(
            ["git", "show", "HEAD~1:site/src/data/giftcodes.ts"],
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="replace",
        )
        old_codes = codes_from_text(result.stdout or "")
    except Exception as e:
        print(f"could not read previous file: {e}")

    added = sorted(new_codes - old_codes)
    if not added:
        print("no new codes; nothing to announce")
        return

    codes_str = "\n".join(f"`{c}`" for c in added)
    msg = (
        f"🎁 *New gift code{'s' if len(added) > 1 else ''} in Last Asylum: Plague!*\n\n"
        f"{codes_str}\n\n"
        f"Redeem: https://gevents.globallap.com/gamecode/index.html?gameId=440\n"
        f"All codes: https://last-asylum-hub.netlify.app/codes/"
    )

    url = f"https://api.telegram.org/bot{TOKEN}/sendMessage"
    data = urllib.parse.urlencode(
        {"chat_id": CHAT_ID, "text": msg, "parse_mode": "Markdown"}
    ).encode()
    try:
        with urllib.request.urlopen(urllib.request.Request(url, data=data), timeout=15) as r:
            print("announced:", ", ".join(added), "status", r.status)
    except Exception as e:
        print(f"telegram error: {e}", file=sys.stderr)


if __name__ == "__main__":
    main()