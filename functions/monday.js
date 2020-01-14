const monday = (req, res) => {
    res.send({
        "response_type": "in_channel",
        "text": "@canal *BUEN LUNES!* A cargar _les hores chiques_!!",
        "attachments": [{
            "text": "https://tarmacio.hubplanner.com/time_sheets"
        }]
    })
};

module.exports = monday;