const express = require('express');
const FactsRoute = require('./routes/facts');

const apiRouter = express.Router();

new FactsRoute(apiRouter);

module.exports = apiRouter;
