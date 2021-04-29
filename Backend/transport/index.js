const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const shop = require('./src/shop');
const cms = require('./src/cms');

const { log } = console;

(function buildServer() {
  const app = express();
  app.use(express.json());
  const server = http.Server(app);
  const io = socketio(server);

  io.on('connection', () => {
    log('WS client connection');
  });

  app.post('/product', async ({ body }, res) => cms.updateProducts({ data: body })
    .then(() => res.status(200).send())
    .catch(() => res.status(400).send()));

  app.post('/ws-out', async ({ body }, res) => {
    const { type, payload } = body;
    io.emit(type, payload);
    return res.status(200).send();
  });

  server.listen(process.env.PORT || 3000, () => {
    log('Server running');
  });
}());

(function syncServices() {
  return shop
    .load()
    .then(cms.updateProducts)
    .then(() => log('success sync'));
}());
