const Discord = require('discord.js');

const token = 'OTkxODc4MjI0NjI1ODAzMjY0.G3820G.wPsvotkXMc4qvSyikMqIkJ-_5PoRiZMG4ruVe0';

const client = new Discord.Client({
	intents: [
		"GUILDS",
		"GUILD_MESSAGES"
	]



})

client.on('ready', () => {
	console.log('SnowFLake Activated')
})


client.on('messageCreate', (message) => {
		if (message.content	== 'hi'){
				message.reply('hello there')
		}


})





















client.login(token);