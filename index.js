const express = require('express');
require('dotenv').config();

const app = express();

app.post('/monday', (req, res) => {
    res.send({
        "response_type": "in_channel",
        "text": "@canal *¡BUEN LUNES!* No olviden cargar las hora :rezo::tono_de_piel-4:",
        "attachments": [{
            "text": "https://tarmacio.hubplanner.com/time_sheets"
        }]
    })
});

app.listen(process.env.PORT || '3000');