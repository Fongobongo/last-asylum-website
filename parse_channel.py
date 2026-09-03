import asyncio
import json
import os

import discord
from dotenv import load_dotenv

load_dotenv()

TOKEN = os.getenv("DISCORD_TOKEN")
CONFIG_PATH = os.path.join(os.path.dirname(__file__), "channels.json")
DATA_DIR = os.path.join(os.path.dirname(__file__), "data")

with open(CONFIG_PATH, encoding="utf-8") as f:
    CONFIG = json.load(f)

GUILD_ID = CONFIG["guild_id"]
CHANNELS = CONFIG["channels"]


def message_to_dict(msg):
    return {
        "id": msg.id,
        "author_id": msg.author.id,
        "author_name": str(msg.author),
        "content": msg.content,
        "created_at": msg.created_at.isoformat(),
        "embeds": [e.to_dict() for e in msg.embeds],
        "attachments": [
            {"filename": a.filename, "url": a.url} for a in msg.attachments
        ],
    }


class Scraper(discord.Client):
    async def on_ready(self):
        if getattr(self, "_started", False):
            return
        self._started = True

        print("Logged in as", self.user, flush=True)
        guild = self.get_guild(GUILD_ID)

        text_channels = [c for c in CHANNELS if c.get("type") != "forum"]
        forums = [c for c in CHANNELS if c.get("type") == "forum"]

        forum_threads = {}
        if forums:
            forum_threads = await self._fetch_forum_threads(guild, forums)

        for entry in CHANNELS:
            ctype = entry.get("type") or "text"
            name = entry.get("name") or str(entry["id"])
            if ctype == "forum":
                threads = forum_threads.get(entry["id"], [])
                await self._scrape_forum(threads, name)
            else:
                channel = guild.get_channel(entry["id"]) or await self.fetch_channel(entry["id"])
                await self._scrape_text(channel, name)

        await self.close()

    async def _fetch_forum_threads(self, guild, forums):
        for _ in range(60):
            if guild._threads:
                break
            await asyncio.sleep(0.5)

        by_forum = {}
        for f in forums:
            fid = f["id"]
            threads = [t for t in guild.threads if t.parent_id == fid]

            archived = await self._fetch_archived_threads(fid)
            known = {t.id for t in threads}
            for t in archived:
                if t.id not in known:
                    threads.append(t)

            threads.sort(key=lambda t: t.id)
            by_forum[fid] = threads
            print(f"[sync] {f.get('name')}: {len(threads)} threads ({len(archived)} archived)", flush=True)
        return by_forum

    async def _fetch_archived_threads(self, forum_id):
        threads = []
        before = None
        while True:
            data = await self.http.get_public_archived_threads(forum_id, before=before)
            for raw in data.get("threads", []):
                threads.append(discord.Thread(guild=self.get_guild(GUILD_ID), state=self._connection, data=raw))
            if not data.get("has_more"):
                break
            before = data["threads"][-1]["thread_metadata"]["archive_timestamp"]
        return threads

    async def _scrape_text(self, channel, name):
        msgs = []
        async for msg in channel.history(limit=None):
            msgs.append(message_to_dict(msg))
        msgs.reverse()
        self._save({"channel_name": name, "messages": msgs}, f"{name}.json")
        print(f"[text] {name}: {len(msgs)} messages", flush=True)

    async def _scrape_forum(self, threads, name):
        result = []
        for i, th in enumerate(threads):
            print(f"  [{i+1}/{len(threads)}] {th.name}", flush=True)
            msgs = []
            async for msg in th.history(limit=None):
                msgs.append(message_to_dict(msg))
            msgs.reverse()
            result.append({
                "thread_id": th.id,
                "thread_name": th.name,
                "message_count": len(msgs),
                "messages": msgs,
            })
        self._save({"channel_name": name, "threads": result}, f"{name}.json")
        total = sum(t["message_count"] for t in result)
        print(f"[forum] {name}: {total} messages across {len(result)} threads", flush=True)

    @staticmethod
    def _save(payload, filename):
        os.makedirs(DATA_DIR, exist_ok=True)
        path = os.path.join(DATA_DIR, filename)
        with open(path, "w", encoding="utf-8") as f:
            json.dump(payload, f, ensure_ascii=False, indent=2)


async def main():
    c = Scraper()
    await c.start(TOKEN)


try:
    asyncio.run(main())
except BaseException:
    pass