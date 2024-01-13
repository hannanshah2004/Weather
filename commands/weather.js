const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const  axios  = require('axios');


const dotenv = require('dotenv');
dotenv.config();


module.exports = {
    data: new SlashCommandBuilder()          //create slash command
        .setName('weather')
        .setDescription('Shows weather in a specified location')
        .addStringOption(option =>
            option.setName('input')
            .setDescription('user input')
            .setRequired(true)
        ),
        async execute(interaction){
            const input = interaction.options.getString('input'); //getting user input of the city
            await axios.get("https://api.openweathermap.org/data/2.5/weather?q="+input+"&appid="+process.env.WEATHER_APPID+"&units=metric").then(response =>{  
                const data = response.data;
                console.log(data);
                const embed = new MessageEmbed() //create embed 
                .setTitle('Current Weather')
                .addFields(
                {name: 'Location', value: data.name},
                {name: 'Current',value: data.weather[0].description},
                {name: 'Temperature', value: (data.main.temp).toString()+'C'},
                {name: 'Wind', value: (data.wind.speed).toString()+'m/s'},
                {name: 'Humidity', value: (data.main.humidity).toString()+'%'})
                interaction.reply({embeds: [embed] });
                
                
            }).catch(err =>console.log(err));            
        },
};

