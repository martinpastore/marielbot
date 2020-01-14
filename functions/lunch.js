const lunch = (req, res) => {
    res.send({
        "response_type": "in_channel",
        "text": "Chicos los que todavía no fueron a comer, por favor recuerden de organizarse para comer y avisarme con la fecha y el lugar elegido"
    })
}

module.exports = lunch;