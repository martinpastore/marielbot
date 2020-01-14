const morning = (req, res) => {
    res.send({
        "response_type": "in_channel",
        "text": "@canal *Morning Tarmacians!*",
    })
}

module.exports = morning;