import { ExtendedClient } from "../client/ExtendedClient.js";
import { Command } from "./Command.js";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "url";

export async function loadCommands(client: ExtendedClient) {
  const commandsPath = path.join(process.cwd(), "dist", "commands");

  for (const category of fs.readdirSync(commandsPath)) {
    const categoryPath = path.join(commandsPath, category);

    for (const file of fs.readdirSync(categoryPath)) {
      if (!file.endsWith(".js")) continue;

      const filePath = path.join(categoryPath, file);
      const fileUrl = pathToFileURL(filePath).href;
      const commandModule = await import(fileUrl);

      const CommandClass = commandModule.default;
      if (!CommandClass) {
        console.warn(`❌ Comando inválido em: ${file}`);
        continue;
      }

      const command: Command = new CommandClass();

      client.commands.set(command.name, command);

      for (const alias of command.aliases) {
        client.commands.set(alias, command);
      }

      console.log(`✅ Comando carregado: ${command.name}`);
    }
  }
}

export async function loadEvents(client: ExtendedClient) {
  const eventsPath = path.join(process.cwd(), "dist", "events");

  for (const file of fs.readdirSync(eventsPath)) {
    if (!file.endsWith(".js")) continue;

    const filePath = path.join(eventsPath, file);
    const fileUrl = pathToFileURL(filePath).href;
    const eventModule = await import(fileUrl);

    const eventFunc = eventModule.default;

    if (typeof eventFunc === "function") {
      eventFunc(client);
      console.log(`✅ Evento carregado: ${file}`);
    } else {
      console.warn(`❌ Evento inválido em: ${file}`);
    }
  }
}
