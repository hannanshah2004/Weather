const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
          .setName('user')
          .setDescription('Replies with user information'),
          async execute(interaction){
              return interaction.reply(`User Name: ${interaction.user.tag}\nUser Id: ${interaction.user.id}`);
          },
};