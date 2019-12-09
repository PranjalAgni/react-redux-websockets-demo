const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const responseTime = require('response-time');
const winston = require('winston');
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

const PORT = 4040;

app.listen(PORT, () => {
  winston.info(`API running at http://localhost:${PORT}`);
});
