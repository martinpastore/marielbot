const express = require('express');
const monday = require('../functions/monday');
const morning = require('../functions/morning');

const router = express.Router();

router.post('/monday', monday)
router.post('/morning', morning)

module.exports = router;
