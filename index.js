const SlackBot = require('slackbots');
const express = require('express');
require('dotenv').config();

const app = express();

const bot = new SlackBot({
    token: `${process.env.BOT_TOKEN}`,
    name: 'MarielBot'
});

app.post('/monday', (req, res) => {
    bot.postMessage('A cargar las hora chiques!!!', {})
    res.send()
});

app.listen(process.env.PORT || '3000');