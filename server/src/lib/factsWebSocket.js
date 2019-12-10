const socketIO = require('socket.io');
const winston = require('winston');
const axios = require('axios');

let ws = null;
const init = server => {
  const io = socketIO(server);
  io.on('connection', socket => {
    ws = socket;
    console.log('Socket connected....');
    socket.on('disconnect', () => {
      console.log('Client Disconnected');
    });
  });
};

const send = async () => {
  try {
    const response = await doAPICall();
    ws.emit('random', response.value);
  } catch (e) {
    winston.error(e.stack);
  }
};

const doAPICall = async () => {
  try {
    const response = await axios.get('http://localhost:4040/api/v1/facts');
    return response.data;
  } catch (err) {
    winston.error(err.stack);
  }
};

module.exports = {
  init,
  send
};
