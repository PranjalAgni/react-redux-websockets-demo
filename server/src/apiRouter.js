const express = require('express');
const FactsRoute = require('./routes/facts');
const SearchRoute = require('./routes/search');

const apiRouter = express.Router();

new FactsRoute(apiRouter);
new SearchRoute(apiRouter);

module.exports = apiRouter;
