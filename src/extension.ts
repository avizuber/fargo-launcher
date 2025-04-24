import * as vscode from "vscode";

interface TerminalCommand {
  name: string;
  command: string;
  enabled: boolean;
}

function getConfig(): {
  splitTerminals: boolean;
  promptBeforeRunning: boolean;
  terminals: TerminalCommand[];
  openBlankTerminal: boolean;
  blankTerminalLocation: string;
} {
  const config = vscode.workspace.getConfiguration("fargoLauncher");
  return {
    splitTerminals: config.get<boolean>("splitTerminals", false),
    promptBeforeRunning: config.get<boolean>("promptBeforeRunning", true),
    terminals: config.get<TerminalCommand[]>("terminals", []),
    openBlankTerminal: config.get<boolean>("openBlankTerminal", false),
    blankTerminalLocation: config.get<string>("openBlankTerminal", "tab"),
  };
}

export function activate(context: vscode.ExtensionContext) {
  const statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left,
    100
  );
  statusBarItem.command = "fargoLauncher.launch";
  statusBarItem.text = "🚀 Fargo";
  statusBarItem.tooltip = "Launch Fargo Terminals";
  statusBarItem.show();
  context.subscriptions.push(statusBarItem);

  const disposable = vscode.commands.registerCommand(
    "fargoLauncher.launch",
    async () => {
      const {
        splitTerminals,
        promptBeforeRunning,
        terminals,
        openBlankTerminal,
        blankTerminalLocation,
      } = getConfig();
      const enabledCommands = terminals.filter((t) => t.enabled);

      let selectedCommands: TerminalCommand[] = enabledCommands;

      if (promptBeforeRunning) {
        const picks = await vscode.window.showQuickPick(
          enabledCommands.map((t) => ({
            label: t.name,
            detail: t.command,
            picked: true,
          })),
          {
            canPickMany: true,
            title: "Select commands to run",
          }
        );
        if (!picks) {
          return;
        }
        selectedCommands = enabledCommands.filter((cmd) =>
          picks.some((pick) => pick.label === cmd.name)
        );
      }

      let firstTerminal: vscode.Terminal | undefined;

      // Launch the selected commands
      for (const [i, cmd] of selectedCommands.entries()) {
        let terminal: vscode.Terminal;

        if (splitTerminals && i > 0 && firstTerminal) {
          terminal = vscode.window.createTerminal({
            name: cmd.name,
            location: { parentTerminal: firstTerminal },
          });
        } else {
          terminal = vscode.window.createTerminal(cmd.name);
          if (!firstTerminal) {
            firstTerminal = terminal;
          }
        }

        terminal.show(true);
        terminal.sendText(cmd.command);
      }

      // Inside the blank terminal block:
      if (openBlankTerminal) {
        const blankOptions: vscode.TerminalOptions = {
          name: "Blank Terminal",
        };

        if (blankTerminalLocation === "split" && firstTerminal) {
          blankOptions.location = { parentTerminal: firstTerminal };
        }

        const blankTerminal = vscode.window.createTerminal(blankOptions);
        blankTerminal.show(true);
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
