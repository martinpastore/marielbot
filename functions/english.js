const english = (req, res) => {
    res.send({
        "response_type": "in_channel",
        "text": `Link para que puedan sumarse a la plataforma de ingles: https://classroom.google.com/u/0/h\n
Se van a tener que unir con un gmail personal, porque el de Tarmac al ser empresa, no lo permite.\n
Una vez que esten en el link tienen que unirse a la clase con el siguiente codigo: 4nzib4f`
    })
}

module.exports = english;