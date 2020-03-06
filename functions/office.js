const office = (req, res) => {
    res.send({
        "response_type": "in_channel",
        "text": "Av. Hipolito Yrigoyen 146 - Piso 2 - Espacio F5",
    })
}

module.exports = office;