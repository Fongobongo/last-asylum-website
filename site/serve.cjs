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

const server = createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath.endsWith('/')) urlPath += 'index.html';
  const file = path.join(DIST, urlPath);
  if (!file.startsWith(DIST)) { res.writeHead(403); return res.end(); }

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