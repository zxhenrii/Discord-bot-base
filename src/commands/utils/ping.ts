import {
  ChatInputApplicationCommandData,
  CommandInteraction,
  GuildTextBasedChannel,
  PermissionsBitField,
  User,
  Client,
  Guild
} from "discord.js";
import { Command } from "../../utils/Command.js";

export default class PingCommand extends Command {
  constructor() {
    super(
      "ping",                              // 1. Nome do comando (prefixado): !ping
      "Responde com pong!",               // 2. Descrição simples para ajuda (!help)
      [],                                 // 3. Aliases (ex: ["latency"])
      [],                                 // 4. Roles obrigatórios (nenhum aqui)
      ["p"],                              // 5. Prefixo curto alternativo (!p)
      {
        name: "ping",                     // 6. Nome usado para slash (/ping)
        description: "Responde com pong!"// 7. Descrição para o comando de barra
      } satisfies ChatInputApplicationCommandData // 8. Garante tipo correto
    );
  }

  async execute(
    client: Client,
    guild: Guild,
    user: User,
    channel: GuildTextBasedChannel,
    data: CommandInteraction | string[]
  ): Promise<void> {
    if (data instanceof CommandInteraction) {
      await data.reply("🏓 Pong!");
    } else {
      await channel.send("🏓 Pong!");
    }
  }
}
