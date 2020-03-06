const help = (req, res) => {
    res.send({
        "response_type": "in_channel",
        "text": `*Comandos:*\n
/coca - this is not coke \n
/vevo - c u c\n
/complain - Send your complain \n
/invoice - Invoice information\n
/lunch - Lunch reminder\n
/monday - Hubplanner friendly reminder\n
/morning - Greetings message\n
/office - Office information\n
/birthday - Birthday celebration. Date is required (2020-12-01).\n
`})
}

module.exports = help;