const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle, EmbedBuilder } = require('discord.js');
const { embedColor, serverName, serverLogo } = require('../config.json');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isButton()) return;
        if (interaction.customId === 'applications_1') {
        const modal = new ModalBuilder()
			.setCustomId('lspd_application')
			.setTitle('Podanie do LSPD');

		const firstInput = new TextInputBuilder()
			.setCustomId('firstInput')
			.setLabel("Imie i nazwisko (IC)")
			.setStyle(TextInputStyle.Short);

		const secondInput = new TextInputBuilder()
			.setCustomId('secondInput')
			.setLabel("Doświadczenie (OOC)")
			.setStyle(TextInputStyle.Paragraph);
            
		const thirdInput = new TextInputBuilder()
			.setCustomId('thirdInput')
			.setLabel("Historia postaci (IC)")
			.setStyle(TextInputStyle.Paragraph);

		const fourInput = new TextInputBuilder()
			.setCustomId('fourInput')
			.setLabel("List Motywacyjny (IC)")
			.setStyle(TextInputStyle.Paragraph);

		const firstActionRow = new ActionRowBuilder().addComponents(firstInput);
		const secondActionRow = new ActionRowBuilder().addComponents(secondInput);
		const thirdActionRow = new ActionRowBuilder().addComponents(thirdInput);
		const fourActionRow = new ActionRowBuilder().addComponents(fourInput);

		modal.addComponents(firstActionRow, secondActionRow, thirdActionRow, fourActionRow);

		await interaction.showModal(modal);
        } else if (interaction.customId === 'applications_2') {
            const modal = new ModalBuilder()
			.setCustomId('ems_application')
			.setTitle('Podanie do EMS');

		const firstInput = new TextInputBuilder()
			.setCustomId('firstInput')
			.setLabel("Imie i nazwisko (IC)")
			.setStyle(TextInputStyle.Short);

		const secondInput = new TextInputBuilder()
			.setCustomId('secondInput')
			.setLabel("Doświadczenie (OOC)")
			.setStyle(TextInputStyle.Paragraph);
            
		const thirdInput = new TextInputBuilder()
			.setCustomId('thirdInput')
			.setLabel("Historia postaci (IC)")
			.setStyle(TextInputStyle.Paragraph);

		const fourInput = new TextInputBuilder()
			.setCustomId('fourInput')
			.setLabel("List Motywacyjny (IC)")
			.setStyle(TextInputStyle.Paragraph);

		const firstActionRow = new ActionRowBuilder().addComponents(firstInput);
		const secondActionRow = new ActionRowBuilder().addComponents(secondInput);
		const thirdActionRow = new ActionRowBuilder().addComponents(thirdInput);
		const fourActionRow = new ActionRowBuilder().addComponents(fourInput);

		modal.addComponents(firstActionRow, secondActionRow, thirdActionRow, fourActionRow);

		await interaction.showModal(modal);
        } else if (interaction.customId === 'applications_3') {
            const modal = new ModalBuilder()
			.setCustomId('lsc_application')
			.setTitle('Podanie do LSC');

		const firstInput = new TextInputBuilder()
			.setCustomId('firstInput')
			.setLabel("Imie i nazwisko (IC)")
			.setStyle(TextInputStyle.Short);

		const secondInput = new TextInputBuilder()
			.setCustomId('secondInput')
			.setLabel("Doświadczenie (OOC)")
			.setStyle(TextInputStyle.Paragraph);
            
		const thirdInput = new TextInputBuilder()
			.setCustomId('thirdInput')
			.setLabel("Historia postaci (IC)")
			.setStyle(TextInputStyle.Paragraph);

		const fourInput = new TextInputBuilder()
			.setCustomId('fourInput')
			.setLabel("List Motywacyjny (IC)")
			.setStyle(TextInputStyle.Paragraph);

		const firstActionRow = new ActionRowBuilder().addComponents(firstInput);
		const secondActionRow = new ActionRowBuilder().addComponents(secondInput);
		const thirdActionRow = new ActionRowBuilder().addComponents(thirdInput);
		const fourActionRow = new ActionRowBuilder().addComponents(fourInput);

		modal.addComponents(firstActionRow, secondActionRow, thirdActionRow, fourActionRow);

		await interaction.showModal(modal);
        }
    }
};