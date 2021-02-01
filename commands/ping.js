const Command = require('./command')
const Roles = require('../utils/roles')
const config = require('../config.json') // the ID of the roles are located in `config.roles.<a,b>`

class JoinCommand extends Command {
    getAliases() {
        return ['ping'];
    }
  
    async exec(msg, args) {
        if (msg.content === '+ping') {  
            msg.channel.send(`🏓Latency is ${Date.now() - msg.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
        }
    }

    getHelp() {
        return '...pong!';
    }
}

module.exports = JoinCommand
