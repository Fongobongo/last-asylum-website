#!/usr/bin/env node
/**
 * Local build wrapper.
 *
 * Inside the WorkBuddy sandbox the CLI injects
 *   NODE_OPTIONS=--require=.../cli/vendor/shim/node-language-shim.cjs
 * whose safe-delete shim blocks 50+ deletions in a single call. Astro's
 * cleanServerOutput() removes ~474 dist/pages/*.astro.mjs files at the end of
 * the build, so a plain `npm run build` exits 1 there (the HTML is already
 * generated, but postbuild/pagefind never runs).
 *
 * CODEBUDDY_SAFE_DELETE_ENABLED=0 disables that shim for this process tree
 * only. Outside WorkBuddy the variable is simply ignored, so this wrapper is
 * safe to use anywhere. The inline form `VAR=0 npm run build` only works in
 * POSIX shells — this script also works from PowerShell and cmd.exe.
 *
 * Usage: npm run build:local
 */
import { spawnSync } from 'node:child_process';

process.env.CODEBUDDY_SAFE_DELETE_ENABLED = '0';

const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const result = spawnSync(npm, ['run', 'build'], {
  stdio: 'inherit',
  env: process.env,
  shell: process.platform === 'win32',
});

if (result.error) {
  console.error(`build:local could not start npm: ${result.error.message}`);
  process.exit(1);
}

process.exit(result.status ?? 1);
