'use strict';

//Const
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

// Variables
let Prefix = "!";
var Commands = config.commands
var Classes = {};


client.login(config.token);

client.on("ready", () => {
  console.log("I am ready!");

  for (var i = 0; i<Commands.length; i++){

    const obj = require("./Classes/" + Commands[i]);

    Classes[Commands[i]] = obj;

  }

});

client.on("message", (message) => {
  if (!message.content.startsWith(Prefix) || message.author.bot) return;
  if (message.content.startsWith(Prefix + "logout")){  client.logout() };

  for (var i = 0; i<Commands.length; i++){
    var Command = Commands[i];
    if (message.content.startsWith(Prefix + Command)){

      var args = message.content.match("/\b(\w+\W+)/g")

      console.log(args);

      new Classes[Command](message, args);

    }
  }

});
