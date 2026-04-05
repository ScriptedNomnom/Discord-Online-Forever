require('dotenv').config({ path: './token.env' });
const Eris = require("eris");
const bot = new Eris(process.env.token);

bot.on("ready", () => {
    console.log("Ready!");
    bot.editStatus("idle");
});

bot.on("error", (err) => {
  console.error(err);
});

bot.connect();
