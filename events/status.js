const { Events, ActivityType } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		client.user.setPresence({
			activities: [{ name: `https://github.com/NikoDevLOL`, type: ActivityType.Playing }],
			status: 'idle',
		});
	},
};