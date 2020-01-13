const SlackBot = require('slackbots');
const express = require('express');
require('dotenv').config();

const app = express();


const bot = new SlackBot({
    token: `${process.env.BOT_TOKEN}`,
    name: 'MarielBot'
});

app.get('/monday', (req, res) => {
    console.log(req)
});

app.listen('8080');