const winston = require('winston');
const app = require('./app');
const factsWebSocket = require('./lib/factsWebSocket');

const PORT = 4040;

app.listen(PORT, () => {
  winston.info(`API running at http://localhost:${PORT}`);
});

// const wsPromise = factsWebSocket.init(server);
// wsPromise.then(ws => {
//   setInterval(() => {
//     factsWebSocket.send(ws);
//   }, 5000);
// });
