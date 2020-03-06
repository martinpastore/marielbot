const moment = require('moment');

const birthday = (req, res) => {
    if (req.body && req.body.text) {
        const date = moment(req.body.text).format('DD/MM/YYYY');
        
        if (!date) {
            res.send({
                "response_type": "ephemeral",
                "text": "Pone bien la fecha pelotudo."
            })
        } else {
            res.send({
                "response_type": "in_channel",
                "text": `*AVISOS IMPORTANTES* El ${date} vamos a celebrar los cumpleaños, por favor, confirmen el invite los que vienen.`
            })
        }
    }
}

module.exports = birthday;