const express = require('express');
const routes = require('./routes/routes');
require('dotenv').config();

const app = express();

app.use('/', routes);

app.listen(process.env.PORT || '3000');