const Command = require('./command')
const Roles = require('../utils/roles')
const config = require('../config.json') // the ID of the roles are located in `config.roles.<a,b>`

class JoinCommand extends Command {
    getAliases() {
        return ['roles'];
    }
  
    async exec(msg, args) {
        // todo
    }

    getHelp() {
        return 'Lists out the available roles in the server';
    }
}

module.exports = JoinCommand
