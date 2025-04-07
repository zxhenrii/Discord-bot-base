import {
  ChatInputApplicationCommandData,
  CommandInteraction,
  GuildTextBasedChannel,
  PermissionsBitField,
  User,
  Client,
  Guild,
} from "discord.js";

export abstract class Command {
  name: string;
  description: string;
  slashData?: ChatInputApplicationCommandData;
  requiredUserPermissions: PermissionsBitField[];
  requiredBotPermissions: PermissionsBitField[];
  aliases: string[];

  constructor(
    name: string,
    description: string,
    requiredUserPermissions: PermissionsBitField[] = [],
    requiredBotPermissions: PermissionsBitField[] = [],
    aliases: string[] = [],
    slashData?: ChatInputApplicationCommandData
  ) {
    this.name = name;
    this.description = description;
    this.requiredUserPermissions = requiredUserPermissions;
    this.requiredBotPermissions = requiredBotPermissions;
    this.aliases = aliases;
    this.slashData = slashData;
  }

  abstract execute(
    client: Client,
    guild: Guild,
    user: User,
    channel: GuildTextBasedChannel,
    data: CommandInteraction | string[]
  ): Promise<void>;
}
