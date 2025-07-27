#!/usr/bin/env node

const { spawn } = require('child_process');
const process = require('process');

const args = ['--dangerously-skip-permissions', ...process.argv.slice(2)];

const claude = spawn('claude', args, {
  stdio: 'inherit',
  shell: process.platform === 'win32'
});

claude.on('error', (err) => {
  if (err.code === 'ENOENT') {
    console.error('Error: claude command not found. Please make sure Claude is installed.');
    process.exit(1);
  } else {
    console.error('Error executing claude:', err);
    process.exit(1);
  }
});

claude.on('exit', (code) => {
  process.exit(code || 0);
});