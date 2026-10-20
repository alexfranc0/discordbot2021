require('dotenv').config();
const {REST, Routes} = require('discord.js');

const commands = [
    {
        name : 'test',
        description : 'runs a test i first made',
    }

]

const rest = new REST({version : '10'}).setToken(process.env.BOT_TOKEN);

(async () => {
    try {
        console.log('REGISTERING COMMANDS...');

        
        await rest.put(
            Routes.applicationGuildCommands(
                process.env.BOT_ID,
                process.env.SERVER_ID
            ),
            {body : commands}
        );
        
        console.log('Commands registered');
    } catch (error) {
        console.log(`errrrrorrrrrrrr: ${error}`);
    }
})();