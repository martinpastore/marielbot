const express = require('express');
const monday = require('../functions/monday');
const morning = require('../functions/morning');
const lunch = require('../functions/lunch');
const vevo = require('../functions/vevo');

const router = express.Router();

router.post('/monday', monday)
router.post('/morning', morning)
router.post('/lunch', lunch)
router.post('/vevo', vevo)

module.exports = router;
