const SlackBot = require('slackbots');
const express = require('express');
require('dotenv').config();

const app = express();

app.post('/monday', (req, res) => {
    res.send({
        "response_type": "in_channel",
        "text": "A cargar las horas chiques!!",
        "attachments": [{
            "text": "https://tarmacio.hubplanner.com/time_sheets"
        }]
    })
});

app.listen(process.env.PORT || '3000');