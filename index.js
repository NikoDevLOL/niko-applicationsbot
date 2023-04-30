console.clear()
const { REST, Routes, Client, GatewayIntentBits, Events, Collection } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');
const client = new Client({ ws: { properties: { $browser: "Discord iOS" }}, intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers]});
const fs = require('fs');
const path = require('path');
const clc = require("cli-color");

client.once(Events.ClientReady, c => {
	console.log(clc.red.bold(`🛠️ Bot został zalogowany jako - ${c.user.tag}`));
	console.log(clc.green.bold('🎓 Bot został stworzony przez - niko.#2611'))
	console.log(clc.green.bold('🎓 Github - https://github.com/NikoDevLOL'))
});

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`❗ W komendzie ${filePath} brakuje data lub execute`)
	}
}

const commands = [];
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
	try {
		console.log(clc.blue.bold(`🔧 Poprawnie Załadowano ${commands.length} komendy`));
		const data = await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);
	} catch (error) {
		console.error(error);
	}
})();

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;
	
	const command = interaction.client.commands.get(interaction.commandName);
	
	if (!command) {
		console.error(`${interaction.commandName} się koksem zajebał bratku`);
		return;
	}
	
	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'An error occurred while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'An error occurred while executing this command!', ephemeral: true });
		}
	}
});

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.login(token);