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

Click the 🚀 Fargo icon in the status bar to launch your workflow!
