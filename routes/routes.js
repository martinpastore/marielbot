const express = require('express');
const monday = require('../functions/monday');
const morning = require('../functions/morning');
const lunch = require('../functions/lunch');

const router = express.Router();

router.post('/monday', monday)
router.post('/morning', morning)
router.post('/lunch', lunch)

module.exports = router;
