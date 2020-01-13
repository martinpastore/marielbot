const SlackBot = require('slackbots');
const express = require('express');
require('dotenv').config();

const app = express();

const bot = new SlackBot({
    token: `${process.env.BOT_TOKEN}`,
    name: 'MarielBot'
});

app.get('/monday', (req, res) => {
    bot.postMessageToChannel('bot-test', 'A cargar las hora chiques!!!', {})
});

app.listen(process.env.PORT || '3000');