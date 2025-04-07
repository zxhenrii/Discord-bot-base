import {
  Client,
  GatewayIntentBits,
  Collection,
  Partials,
  ActivityType
} from "discord.js";
import "dotenv/config";
import { Command } from "../utils/Command.js";
import { loadCommands, loadEvents } from "../utils/loader.js";

export class ExtendedClient extends Client {
  public commands: Collection<string, Command> = new Collection();
  public prefix: string = process.env.PREFIX ?? "!";

  constructor() {
    super({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
      ],
      partials: [Partials.Channel]
    });
  }

  async start(): Promise<void> {
    const token = process.env.TOKEN;

    if (!token) {
      console.error("❌ BOT TOKEN não foi encontrado no .env!");
      process.exit(1);
    }

    this.on("ready", async () => {
      this.user?.setPresence({
        activities: [{ name: "Six", type: ActivityType.Listening }],  // Playing | Listening | Watching | Competing | Streaming | Custom
        status: "idle"  // online | idle | dnd | invisible
      });
    });

    try {
      await this.login(token);
      console.log(`✅ Logado como ${this.user?.tag}`);

      await loadCommands(this);
      await loadEvents(this);
    } catch (err) {
      console.error("❌ Erro ao iniciar o bot:", err);
    }
  }
}
