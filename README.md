# cx - Claude CLI Wrapper

A simple cross-platform CLI tool that runs `claude --dangerously-skip-permissions`.

## Installation

### Option 1: Install globally via npm (recommended)

```bash
npm install -g https://github.com/yourusername/cx.git
```

### Option 2: Clone and install locally

```bash
git clone https://github.com/yourusername/cx.git
cd cx
npm install -g .
```

### Option 3: Clone and link for development

```bash
git clone https://github.com/yourusername/cx.git
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