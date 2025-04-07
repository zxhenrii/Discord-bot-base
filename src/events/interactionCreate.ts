import { ExtendedClient } from "../client/ExtendedClient.js";
import {
  Interaction,
  GuildTextBasedChannel,
} from "discord.js";

export default function (client: ExtendedClient) {
  client.on("interactionCreate", async (interaction: Interaction) => {
    if (!interaction.isChatInputCommand()) return;
    if (!interaction.inGuild()) return; // 🔒 garante que está num servidor

    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
      const channel = interaction.channel as GuildTextBasedChannel; // ✅ cast seguro
      await command.execute(
        client,
        interaction.guild!,
        interaction.user,
        channel,
        interaction
      );
    } catch (error) {
      console.error(`❌ Erro ao executar o comando ${interaction.commandName}:`, error);
      await interaction.reply({
        content: "❌ Ocorreu um erro ao executar este comando.",
        ephemeral: true,
      });
    }
  });
}
