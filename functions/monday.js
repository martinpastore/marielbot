const moment = require('moment');

const monday = (req, res) => {
    let resp = {}
    if (moment().isoWeekday() === 1) {
        resp = {
            "response_type": "in_channel",
            "text": "*BUEN LUNES!* A cargar _les hores chiques_!!",
            "attachments": [{
                "text": "https://tarmacio.hubplanner.com/time_sheets"
            }]
        }
    } else {
        resp = {
            "response_type": "in_channel",
            "text": "A vos te parece que hoy es Lunes?? Cargaste las horas??",
            "attachments": [{
                "text": "https://tarmacio.hubplanner.com/time_sheets"
            }]
        }
    }
    res.send(resp)
};

module.exports = monday;