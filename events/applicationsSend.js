const { ActionRowBuilder, Events, EmbedBuilder } = require('discord.js');
const { applications_channel_1, applications_channel_2, applications_channel_3, embedColor, serverName, serverLogo } = require('../config.json');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isModalSubmit()) return;
        const embed = new EmbedBuilder()
        .setTitle('System Podań')
        .setColor(embedColor)
        .setDescription('Twoje podanie zostało wysłane, teraz oczekuj cierpilwie na rozpatrzenie go!')
        .setTimestamp()
        .setFooter({ text: serverName, iconURL: serverLogo });
        await interaction.reply({ embeds: [embed], ephemeral: true });
        if (interaction.customId === 'lspd_application') {
            const firstInput = interaction.fields.getTextInputValue('firstInput');
            const secondInput = interaction.fields.getTextInputValue('secondInput');
            const thirdInput = interaction.fields.getTextInputValue('thirdInput');
            const fourInput = interaction.fields.getTextInputValue('fourInput');
            const channelLSPD = interaction.guild.channels.cache.get(applications_channel_1);
            const embed = new EmbedBuilder()
            .setTitle('Podanie - LSPD')
            .setColor(embedColor)
            .setAuthor({ name: `Podanie użytkownika - ` + interaction.user.username, iconURL: `${interaction.user.avatarURL()}` })
            .setDescription(`\n**Imie i nazwisko (IC):** ` + firstInput + `\n**Doświadczenie (OOC):** ` + secondInput + `\n**Historia postaci (IC):** ` + thirdInput + `\n**List Motywacyjny (IC):** ` + fourInput)
            .setTimestamp()
            .setFooter({ text: serverName, iconURL: serverLogo });
            await channelLSPD.send({ embeds: [embed] });
        } else if (interaction.customId === 'ems_application') {
            const firstInput = interaction.fields.getTextInputValue('firstInput');
            const secondInput = interaction.fields.getTextInputValue('secondInput');
            const thirdInput = interaction.fields.getTextInputValue('thirdInput');
            const fourInput = interaction.fields.getTextInputValue('fourInput');
            const channelEMS = interaction.guild.channels.cache.get(applications_channel_2);
            const embed = new EmbedBuilder()
            .setTitle('Podanie - EMS')
            .setColor(embedColor)
            .setAuthor({ name: `Podanie użytkownika - ` + interaction.user.username, iconURL: `${interaction.user.avatarURL()}` })
            .setDescription(`\n**Imie i nazwisko (IC):** ` + firstInput + `\n**Doświadczenie (OOC):** ` + secondInput + `\n**Historia postaci (IC):** ` + thirdInput + `\n**List Motywacyjny (IC):** ` + fourInput)
            .setTimestamp()
            .setFooter({ text: serverName, iconURL: serverLogo });
            await channelEMS.send({ embeds: [embed] });
        } else if (interaction.customId === 'lsc_application') {
            const firstInput = interaction.fields.getTextInputValue('firstInput');
            const secondInput = interaction.fields.getTextInputValue('secondInput');
            const thirdInput = interaction.fields.getTextInputValue('thirdInput');
            const fourInput = interaction.fields.getTextInputValue('fourInput');
            const channelLSC = interaction.guild.channels.cache.get(applications_channel_3);
            const embed = new EmbedBuilder()
            .setTitle('Podanie - LSC')
            .setColor(embedColor)
            .setAuthor({ name: `Podanie użytkownika - ` + interaction.user.username, iconURL: `${interaction.user.avatarURL()}` })
            .setDescription(`\n**Imie i nazwisko (IC):** ` + firstInput + `\n**Doświadczenie (OOC):** ` + secondInput + `\n**Historia postaci (IC):** ` + thirdInput + `\n**List Motywacyjny (IC):** ` + fourInput)
            .setTimestamp()
            .setFooter({ text: serverName, iconURL: serverLogo });
            await channelLSC.send({ embeds: [embed] });
        }
    }
};