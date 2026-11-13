const { createServer } = require('http');
const { readFile } = require('fs');
const path = require('path');

const DIST = path.join(__dirname, 'dist');
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.xml': 'application/xml',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

// /api/maps is served by the real Cloudflare Pages Function so local preview
// matches production. The D1 binding is replaced by a JSON-file store.
async function handleApi(req, res) {
  const { onRequest } = await import('../functions/api/maps.js');
  const { devStore } = await import('./scripts/dev-maps-store.mjs');

  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);

  const url = new URL(req.url, 'http://127.0.0.1:4399');
  const init = { method: req.method, headers: req.headers };
  if (req.method !== 'GET' && req.method !== 'HEAD' && chunks.length) {
    init.body = Buffer.concat(chunks);
  }

  const response = await onRequest({
    request: new Request(url, init),
    env: { LA_MAPS_STORE: devStore() },
  });
  const text = await response.text();
  res.writeHead(response.status, {
    'Content-Type': response.headers.get('content-type') || 'application/json',
    'Cache-Control': 'no-store',
  });
  res.end(text);
}

const server = createServer((req, res) => {
  if (req.url.split('?')[0] === '/api/maps') {
    handleApi(req, res).catch((err) => {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'dev api failed', detail: String(err && err.message) }));
    });
    return;
  }

  let urlPath;
  try {
    urlPath = decodeURIComponent(req.url.split('?')[0]);
  } catch {
    res.writeHead(400); return res.end('Bad request');
  }
  if (urlPath.endsWith('/')) urlPath += 'index.html';
  const file = path.resolve(DIST, '.' + urlPath);
  // startsWith(DIST) also accepts a sibling such as "dist-cache"; compare the
  // resolved relative path instead so a crafted ../ or %5C cannot escape.
  const rel = path.relative(DIST, file);
  if (rel.startsWith('..') || path.isAbsolute(rel)) {
    res.writeHead(403); return res.end();
  }

  readFile(file, (err, data) => {
    if (err) {
      // try 404
      return readFile(path.join(DIST, '404.html'), (e2, d2) => {
        if (e2) { res.writeHead(404); return res.end('Not found'); }
        res.writeHead(404, { 'Content-Type': MIME['.html'] });
        res.end(d2);
      });
    }
    const ext = path.extname(file).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(4399, '127.0.0.1', () => {
  console.log('preview on http://127.0.0.1:4399');
});
