const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
          .setName('server')
          .setDescription('Replies with server information'),
          async execute(interaction){
              return interaction.reply(`Server name:${interaction.guild.name}\nTotal Members: ${interaction.guild.memberCount}`);
          },
};