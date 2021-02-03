const Command = require('./command')
const Discord = require('discord.js')
const config = require('../config.json')

class SuggestCommand extends Command {
    getAliases() {
        return ['suggest'];
    }

    async exec(msg, args) {
        if (args.length >= 2) {// you must have at least two 'args'
            const group = args.shift().toUpperCase()
            if (!(group == 'A' || group == 'B' || group == 'AB')) {
                msg.reply('INVALID GROUP')
                return false
            }
            const suggestion = args.join(' ')

            const res = this.sendSuggestion(group, suggestion, msg)
            if (!res.status)
                return false
            else {
                // show preview
                msg.reply('Here\'s a preview of the suggestion')
                msg.channel.send(res.embed)
                // send to suggestion channel
                msg.guild.channels.cache.get(config.channels.suggestions)
                    .send(res.embed)
            }

            // TODO: future setup - use `utils/prompt`
            // Show instructions
            // Prompt for Group
            // Prompt for Message
            // Show the suggested embed and prompt for confirmation (defaults to true)
            // Send embed to #topic-suggestions but to #bot-logs if not available
        } else {
            msg.reply('USAGE: `submit <group - A|B|AB> <suggestion here>`')
            return false;
        }
        return true;
    }

    sendSuggestion(group, suggestion, msg) {
        let status = true
        const embed = new Discord.MessageEmbed()
            .setColor('#069406')
            .setTitle('Topic Suggestion')
            .addFields([
                { name: 'Group', value: group },
                { name: 'Suggestion', value: suggestion }
            ])
            .setTimestamp()
            .setFooter(
                `Posted by ${msg.member.displayName}`,
                msg.author.displayAvatarURL,
            )

        if (group == '' || suggestion == '')
            status = false
        return { status, embed }
    }

    getHelp() {
        return 'Suggest a topic to cover on!';
    }
}

module.exports = SuggestCommand