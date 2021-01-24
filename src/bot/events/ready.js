'use strict';

//---------------------------------------------------------------------------------------------------------------//

const moment = require('moment-timezone');

//---------------------------------------------------------------------------------------------------------------//

const { client } = require('../discord_client.js');

//---------------------------------------------------------------------------------------------------------------//

const bot_name = process.env.BOT_NAME;

//---------------------------------------------------------------------------------------------------------------//

module.exports = {
    name: 'ready',
    async handler() {
        const ready_timestamp = `${moment()}`;
        console.log(`----------------------------------------------------------------------------------------------------------------`);
        console.log(`${bot_name} Logged in as ${client.user.tag} on ${ready_timestamp}`);
        console.log(`----------------------------------------------------------------------------------------------------------------`);
    },
};
