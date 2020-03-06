const express = require('express');
const routes = require('./routes/routes');
const bodyParser = require('body-parser')
require('dotenv').config();

const app = express();

app.use(bodyParser())
app.use('/', routes);

app.listen(process.env.PORT || '3000');