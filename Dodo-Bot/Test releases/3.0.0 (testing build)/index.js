const hytescript = require("hytescript.js");
const config = require("./config.json")

const client = new hytescript.DiscordClient({
    token: process.env.token, // token
    prefix: "t!", // bot prefix
    intents: ["Guilds", "GuildMessages", "MessageContent"], // djs v14 intents more info: https://discord-api-types.dev/api/discord-api-types-v10/enum/GatewayIntentBits 
    logJSErrors: config.logJSErrors,
    debug: config.debug,
    respondBots: config.respondBots
});
// command loader
client.readFolder("commands");
// variables handler
client.addDatabase(require("./handlers/variables.js"));
// events support
client.addEvents("messageCreate", "interactionCreate")
