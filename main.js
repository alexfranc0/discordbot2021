require('dotenv').config();
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
client.commands = new Collection();
const prefix = '!';
const fs = require('fs');
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('clientReady', () => {
    console.log('online.');
});

client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'command') {
        const cmd = client.commands.get('command');
        if (cmd) cmd.execute(message, args);
    } else if (command == 'ping') {
        message.channel.send('WHOEVER COMMANDED THIS, YA MOMs A HOE');
    } else if (command == 'who') {
        message.channel.send('fRanCo!');
    } else if (command == 'twitch') {
        message.channel.send('https://www.twitch.tv/FraIVco');
    } else if (command == 'X') {
        message.channel.send('https://www.twitter.com/fraivco');
    } else if (command == 'socials') {
        message.channel.send('https://linktr.ee/fraivco');
    }
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'test') {
        interaction.reply('i am merley a test');
    }
});

client.login(process.env.BOT_TOKEN);