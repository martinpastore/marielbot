const express = require('express');
const monday = require('../functions/monday');
const morning = require('../functions/morning');
const lunch = require('../functions/lunch');
const vevo = require('../functions/vevo');
const coca = require('../functions/coca');
const complain = require('../functions/complain');
const invoice = require('../functions/invoice');

const router = express.Router();

router.post('/monday', monday)
router.post('/morning', morning)
router.post('/lunch', lunch)
router.post('/vevo', vevo)
router.post('/coca', coca)
router.post('/complain', complain)
router.post('/invoice', invoice)

module.exports = router;
