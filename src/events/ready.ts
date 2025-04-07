import { ExtendedClient } from "../client/ExtendedClient";

export default function (client: ExtendedClient) {
  client.on("ready", () => {
    console.log(`✅ Logado como ${client.user?.tag}`);
  });
}
