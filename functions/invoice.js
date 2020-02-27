const invoice = (req, res) => {
    res.send({
        "response_type": "in_channel",
        "text": `Razón social: ABYMAS S.A\n
CUIT del país receptor: 55000000018\n
ID Impositivo: 217079380015\n
Direccion: Maldonado 2274 - Montevideo - Uruguay\n\n
Enviar la factura a facturas.arg@tarmac.io`
    })
}

module.exports = invoice;