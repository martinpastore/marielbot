const express = require("express");
const monday = require("../functions/monday");
const morning = require("../functions/morning");
const lunch = require("../functions/lunch");
const vevo = require("../functions/vevo");
const coca = require("../functions/coca");
const complain = require("../functions/complain");
const invoice = require("../functions/invoice");
const birthday = require("../functions/birthday");
const office = require("../functions/office");
const help = require("../functions/help");
const english = require("../functions/english");
const holidays = require("../functions/holidays");
const masomeno = require("../functions/masomeno");
const basta = require("../functions/basta");
const turururu = require("../functions/turururu");

const router = express.Router();

router.post("/monday", monday);
router.post("/morning", morning);
router.post("/lunch", lunch);
router.post("/vevo", vevo);
router.post("/coca", coca);
router.post("/complain", complain);
router.post("/invoice", invoice);
router.post("/office", office);
router.post("/birthday", birthday);
router.post("/help", help);
router.post("/english", english);
router.post("/holidays", holidays);
router.post("/masomeno", masomeno);
router.post("/basta", basta);
router.post("/turururu", turururu);

module.exports = router;
