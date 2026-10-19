const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'command',
    description: 'EmBeds!',
    execute(message, args) {
        const newEmbed = new EmbedBuilder()
            .setColor('#304281')
            .setTitle('Server Rules')
            .setDescription('Follow These and youll have a great time here')
            .addFields(
                { name: 'Rule 1', value: 'Keep all content PG-13 and English: We We want to be as welcoming as possible, so let’s keep our conversations SFW, and welcoming to all' },
                { name: 'Rule 2', value: 'Treat Everyone The Way You Would Wanted to be Treated' },
                { name: 'Rule 3', value: 'No mini-modding: You can warn members "hey you will get in trouble if you do that" but if you continue to do it while staff is present we will count that as mini modding.' },
                { name: 'Rule 4', value: 'NO: The following topics & actions are prohibited: Evade bans, Impersonate others (Streamers and such), Spamming (Except where allowed), Advertising (Except where allowed). Excessive Trolling., Deliberately disturbing voice chat., Political content. , Religious content., Racial slurs., Sexual slurs. , Personal attacks., Joking about suicide/self harm. ,Anything against TOS or Community Guidelines.' }
            )
            .setFooter({ text: 'Make sure to check the rules channel' });

        message.channel.send({ embeds: [newEmbed] });
    }

};