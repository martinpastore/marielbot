const express = require('express');
require('dotenv').config();

const app = express();

app.post('/monday', (req, res) => {
    res.send({
        "response_type": "in_channel",
        "text": "@canal *BUEN LUNES!* A cargar _les hores chiques_!!",
        "attachments": [{
            "text": "https://tarmacio.hubplanner.com/time_sheets"
        }]
    })
});

app.listen(process.env.PORT || '3000');