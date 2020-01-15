const coca = (req, res) => {
    res.send({
        "response_type": "in_channel",
        "text": "",
        "attachments": [{
            "image_url": "https://pbs.twimg.com/profile_images/1155260737385877504/BKW_01EP_400x400.jpg"
        }]
    })
}

module.exports = coca;