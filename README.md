# 🚀 Fargo Launcher

Launch your favorite development terminals with a single click. Made with VSCode and Cursor in mind.

### 🧠 Features

- Launch multiple terminals at once (e.g., Laravel, Vite, Mailpit)
- Optional split terminals or tabs
- Add your own terminal commands in Settings
- Automatically remembers and re-runs preferred commands
- Optionally open a blank terminal

### ⚙️ Configuration

Go to **Settings > Extensions > Fargo Launcher** to customize:

- ✅ Add/remove terminal commands
- ⚡ Toggle "Prompt before running"
- 🔀 Enable split mode
- ➕ Add a blank terminal (choose split or tab)

Example `settings.json`:

```json
{
  "fargoLauncher.terminals": [
    { "name": "Laravel", "command": "php artisan serve", "enabled": true },
    { "name": "Vite", "command": "npm run dev", "enabled": true },
    { "name": "Mailpit", "command": "mailpit", "enabled": true },
    { "name": "Tinker", "command": "php artisan tinker", "enabled": false }
  ],
  "fargoLauncher.splitTerminals": true,
  "fargoLauncher.promptBeforeRunning": false,
  "fargoLauncher.openBlankTerminal": true,
  "fargoLauncher.blankTerminalLocation": "split"
}
```

### Installation

## 1. Install via VSIX file

Download the .vsix file from the repository or build it yourself using vsce package.

Open VSCode or Cursor (if you're using that).

Run the following command in the command palette (Ctrl+Shift+P or Cmd+Shift+P):

Extensions: Install from VSIX...
Select the .vsix file you downloaded and install it.

## 2. Install via VSCode Marketplace

You can also search for Fargo Launcher directly in the VSCode marketplace and install it from there.

## 3. Configuration

To configure Fargo Launcher, open your VSCode settings (Cmd+, on macOS or Ctrl+, on Windows), and search for Fargo Launcher. You can add additional terminal commands, set up the terminal split view, and enable the "remember my preferences" option.

## 4. Launching Terminals

Click on the 🚀 Fargo icon in the status bar, or use the Fargo Launcher: Launch command from the command palette. You can select which commands to launch, or if you have the "remember my preferences" option enabled, it will launch the defaults without any prompts.
