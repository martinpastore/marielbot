const express = require('express');
const monday = require('../functions/monday');

const router = express.Router();


router.post('/monday', monday)

module.exports = router;
