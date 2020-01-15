const birthday = (req, res) => {
    res.send({
        "response_type": "in_channel",
        "text": `*AVISOS IMPORTANTES* El ${date} vamos a celebrar los cumpleaños, por favor, confirmen el invite los que vienen.`
    })
}

module.exports = birthday;