// Build the Pagefind index, keeping the build log free of unactionable noise.
//
// Pagefind 1.6 prints a "doesn't support stemming" note for every language it
// has no stemmer for (zh, zh-tw, th, ja, ko, ms, vi). There is no config to
// disable those notes without either lying about the page language or hiding
// ALL warnings via --silent. So we filter exactly those two-line notes and
// pass everything else through — real warnings and errors stay visible.
//
// The explicit-glob retry preserves the fallback from the old postbuild script.
import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const runner = path.join(root, 'node_modules', 'pagefind', 'lib', 'runner', 'bin.cjs');
const baseArgs = ['--site', 'dist', '--output-path', 'dist/pagefind'];

const STEMMING_NOTE = /^Note: Pagefind doesn't support stemming for the language\b/;
const STEMMING_DETAIL = 'Search will still work, but will not match across root words.';

function lineFilter(target) {
  let buffer = '';
  let skipDetail = false;

  const emit = (line) => {
    const trimmed = line.trim();
    if (STEMMING_NOTE.test(trimmed)) {
      skipDetail = true;
      return;
    }
    if (skipDetail) {
      skipDetail = false;
      if (trimmed === STEMMING_DETAIL) return;
    }
    target.write(`${line}\n`);
  };

  return {
    write(chunk) {
      buffer += chunk.toString();
      const lines = buffer.split(/\r?\n/);
      buffer = lines.pop() ?? '';
      for (const line of lines) emit(line);
    },
    flush() {
      if (buffer) {
        const line = buffer;
        buffer = '';
        emit(line);
      }
    },
  };
}

function run(extraArgs = []) {
  return new Promise((resolve) => {
    const child = spawn(process.execPath, [runner, ...baseArgs, ...extraArgs], {
      cwd: root,
      stdio: ['inherit', 'pipe', 'pipe'],
    });

    const out = lineFilter(process.stdout);
    const err = lineFilter(process.stderr);
    child.stdout.on('data', (chunk) => out.write(chunk));
    child.stderr.on('data', (chunk) => err.write(chunk));
    child.on('error', (error) => {
      process.stderr.write(`pagefind: failed to start — ${error.message}\n`);
      resolve(1);
    });
    child.on('close', (code) => {
      out.flush();
      err.flush();
      resolve(code ?? 1);
    });
  });
}

const first = await run();
if (first !== 0) {
  process.stderr.write('pagefind: primary index failed, retrying with an explicit HTML glob\n');
  const retry = await run(['--glob', '**/*.html']);
  process.exitCode = retry;
}
