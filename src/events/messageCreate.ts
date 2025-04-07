import { ExtendedClient } from "../client/ExtendedClient";
import { GuildTextBasedChannel } from "discord.js";

export default (client: ExtendedClient) => {
  client.on("messageCreate", async message => {
    if (
      message.author.bot ||
      !message.guild ||
      !message.content.startsWith(client.prefix) ||
      !message.channel.isTextBased()
    )
      return;

    const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
    const cmdName = args.shift()?.toLowerCase();
    const command =
      client.commands.get(cmdName!) ||
      [...client.commands.values()].find(c => c.aliases.includes(cmdName!));
    if (!command) return;

    await command.execute(
      client,
      message.guild,
      message.author,
      message.channel as GuildTextBasedChannel,
      args
    );
  });
};
