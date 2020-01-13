const SlackBot = require('slackbots');
const express = require('express');
require('dotenv').config();

const app = express();

const bot = new SlackBot({
    token: `${process.env.BOT_TOKEN}`,
    name: 'MarielBot'
});

app.post('/monday', (req, res) => {
    res.send({
        "response_type": "in_channel",
        "text": "A cargar las horas chiques!!",
    })
});

app.listen(process.env.PORT || '3000');