import { ExtendedClient } from "./client/ExtendedClient.js";
import 'dotenv/config'

const client = new ExtendedClient();

client.start();
