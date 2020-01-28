const socketIO = require('socket.io');
const winston = require('winston');
const axios = require('axios');

const init = async (server) => {
  let ws = null;
  const io = socketIO(server);
  return io.on('connection', (socket) => {
    ws = socket;
    winston.info('Client Connected');
    socket.on('disconnect', () => {
      winston.info('Client Disconnected');
    });
    return ws;
  });
};

const doAPICall = async () => {
  let response;
  try {
    response = await axios.get('http://localhost:4040/api/v1/facts');
    return response.data;
  } catch (err) {
    winston.error(err.stack);
  }
  return response;
};

const send = async (ws) => {
  try {
    const response = await doAPICall();
    ws.emit('random', {
      data: response.value,
    });
    winston.debug('Published data');
  } catch (e) {
    winston.error(e.stack);
  }
};

module.exports = {
  init,
  send,
};
