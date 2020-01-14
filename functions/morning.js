const morning = (req, res) => {
    res.send({
        "response_type": "in_channel",
        "text": "*Morning Tarmacians!*",
    })
}

module.exports = morning;