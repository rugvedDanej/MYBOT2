require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = process.env.prefix;

cclien.once('ready', () => {
      console.log(client.user.tag + " has logged in!")
});

client.on('message', (message) => {
        if(message.content === prefix + "ping") {
        message.reply('Pong!')
        }
});

client.login(process.env.token)
