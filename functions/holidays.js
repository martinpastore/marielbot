const moment = require('moment');
const fetch = require('node-fetch');

const holidays = (req, res) => {
    fetch(`http://nolaborables.com.ar/api/v2/feriados/${moment().year()}`)
        .then(resp => resp.json())
        .then(data => {
            let holidays = ''
            if (data && data.length) {
                data.map(holiday => {
                    if (holiday.mes >= (moment().month() + 1)) {
                        console.log(holidays);
                        holidays += `${holiday.dia} ${moment().months(holiday.mes - 1).format('MMM')} - ${holiday.motivo} \n`;
                    }
                })
                res.send({
                    "response_type": "in_channel",
                    "text": `Próximos feriados:\n
${holidays}`
                })
            } else {
                res.send({
                    "response_type": "in_channel",
                    "text": "No encontramos feriados próximos."
                })
            }
        })
}

module.exports = holidays;