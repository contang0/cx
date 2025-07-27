# cx - Claude CLI Wrapper

> ⚠️ **WARNING**: This tool runs `claude --dangerously-skip-permissions`, which bypasses security prompts and allows Claude to perform actions without asking for confirmation. This flag should only be used when you fully trust the commands being executed and understand the risks involved. The `--dangerously-skip-permissions` flag can potentially allow destructive operations without warning.
>
> **DISCLAIMER**: The author of cx takes no responsibility for any damage, data loss, or security issues that may arise from using this tool. Use at your own risk.

A simple cross-platform CLI tool that runs `claude --dangerously-skip-permissions`.

## Installation

### Option 1: Install globally via npm (recommended)

```bash
npm install -g https://github.com/contang0/cx.git
```

#### Ubuntu/Linux users
If you encounter permission errors, you have several options:

**Use sudo (simplest):**
```bash
sudo npm install -g https://github.com/contang0/cx.git
```

**Change npm's default directory (recommended for avoiding future permission issues):**
```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
npm install -g https://github.com/contang0/cx.git
```

### Option 2: Clone and install locally

```bash
git clone https://github.com/contang0/cx.git
cd cx
npm install -g .
```

### Option 3: Clone and link for development

```bash
git clone https://github.com/contang0/cx.git
cd cx
npm link
```

## Usage

After installation, you can use `cx` anywhere in your terminal:

```bash
cx
```

This will execute `claude --dangerously-skip-permissions` with any additional arguments passed through.

For example:
```bash
cx --help
# Equivalent to: claude --dangerously-skip-permissions --help
```

## Requirements

- Node.js 14 or higher
- Claude CLI must be installed and available in your PATH

## Platform Support

- Windows (Command Prompt, PowerShell, Git Bash)
- macOS
- Linux

## Uninstallation

```bash
npm uninstall -g cx
```

## License

MIT