//Author: Colton Tipton

//Const
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

// Variables
let Prefix = "!";
var Commands = config.commands
var Classes = {};

client.on("ready", () => {
  console.log("I am ready!");

  for (var i = 0; i<Commands.length; i++){

    const obj = require("./Classes/" + Commands[i]);

    Classes[Commands[i]] = obj;

  }

});

client.on("message", async message => {

    if (!message.content.startsWith(Prefix) || message.author.bot) return;

    for (var i = 0; i < Commands.length; i++) {

        const args = message.content.slice(Prefix).trim().split(/ +/g);

        const command = args.shift().toLowerCase().slice(1);

        console.log(command)

        if (command == Commands[i]) {

            console.log(command, args);

            new Classes[command](client, await message, args);
    }
  }

});

client.login(config.token);