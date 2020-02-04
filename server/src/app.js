const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const responseTime = require('response-time');
const cors = require('cors');
const logger = require('./lib/logger');
const apiRouter = require('./apiRouter');

const app = express();

app.use(helmet());
app.use(responseTime());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', apiRouter);
app.use(logger.sendResponse);

module.exports = app;
