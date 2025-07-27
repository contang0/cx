const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Setting up cx command...');

if (process.platform !== 'win32') {
  const binPath = path.join(__dirname, 'bin', 'cx');
  try {
    fs.chmodSync(binPath, '755');
    console.log('Made cx executable');
  } catch (err) {
    console.error('Warning: Could not make cx executable:', err.message);
  }
}

console.log('Installation complete!');
console.log('You can now use the "cx" command instead of "claude --dangerously-skip-permissions"');