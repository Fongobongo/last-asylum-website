#!/usr/bin/env bash
set -e

# Cleanup previous instances
pkill -f "astro preview" || true
fuser -k 4321/tcp || true
sleep 1

# Start Astro preview
cd /home/fong/la/site
npx astro preview --host 0.0.0.0 --port 4321 --allowed-hosts all &
PREVIEW_PID=$!

cleanup() {
  echo "Cleaning up..."
  kill $PREVIEW_PID 2>/dev/null || true
}
trap cleanup EXIT

# Wait for local server
echo "Waiting for local server on port 4321..."
for i in {1..30}; do
  if curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:4321/ | grep -q "200"; then
    echo "Local Astro preview server is READY on port 4321!"
    break
  fi
  sleep 1
done

echo "Starting Cloudflare tunnel..."
exec /home/fong/.local/bin/cloudflared tunnel --url http://127.0.0.1:4321 --http-host-header localhost --no-autoupdate
