require('dotenv').config();
const {REST, ROUTES} = require('discord.js');

const commands = [
    {
        name : 'command',
        description : 'This is a command'
    }

]

const rest = new REST({version : '10'}).setToken(process.env.BOT_ID);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        
        await rest.put(ROUTES.applicationCommands(process.env.BOT_ID, process.env.SERVER_ID),
            {body : commands}
        )
        
        console.log('Commands registered')
    } catch (error) {
        console.log('errrrrorrrrrrrr: ${error}');
    }
})();