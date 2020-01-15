const vevo = (req, res) => {
    res.send({
        "response_type": "in_channel",
        "text": "*VE VO*",
        "attachments": [{
            "image_url": "https://k31.kn3.net/taringa/D/6/5/0/3/6/G-DragonKing/C36.jpg"
        }]
    })
}

module.exports = vevo;