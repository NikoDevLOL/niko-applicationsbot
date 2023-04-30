const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionFlagsBits, EmbedBuilder} = require('discord.js');
const { embedColor, serverName, serverLogo } = require('../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('setup-applications')
		.setDescription('Setup Applications')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {
        const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('applications_1')
            .setLabel('Podanie LSPD')
            .setEmoji("👮")
            .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
            .setCustomId('applications_2')
            .setLabel('Podanie EMS')
            .setEmoji("🧑‍⚕️")
            .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
            .setCustomId('applications_3')
            .setLabel('Podanie LSC')
            .setEmoji("🧑‍🔧")
            .setStyle(ButtonStyle.Secondary),
        );

        const embed = new EmbedBuilder()
        .setTitle('System Podań')
        .setColor(embedColor)
        .setDescription('Jeżeli jesteś zdecydowany na napisanie podania na naszym serwerze kliknij odpowiedni przycisk.')
        .setFooter({ text: serverName, iconURL: serverLogo })
        
        await interaction.channel.send({ embeds: [embed], components: [row] });
		await interaction.reply({ content: 'System podań został utworzony!', ephemeral: true });
	},
};