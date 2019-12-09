const winston = require('winston');

const LOGS_FILE = 'logs/server.log';
const DEBUG_LOGS_FILE = 'logs/debug.log';

winston.configure({
  transports: [
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
      ),
      filename: DEBUG_LOGS_FILE,
    }),
    new winston.transports.File({
      level: 'info',
      handleExceptions: true,
      format: winston.format.json(),
      filename: LOGS_FILE,
    }),
  ],
});

const getResponse = (message) => ({
  error: true,
  message,
});

const sendResponse = (err, req, res, next) => {
  if (err) {
    winston.error(err.stack);
    res.status(500).send(getResponse(err.message));
  } else {
    next();
  }
};

module.exports = {
  sendResponse,
};
