const WebSocket = require('ws');
const { Message } = require('./models');

const wss = new WebSocket.Server({ port: 8081 });

wss.on('connection', (ws) => {
  console.log('Клиент подключился');

  ws.on('message', (message) => {
    console.log(`Получено сообщение от клиента: ${message}`);

    // Отправить сообщение обратно клиенту, чтобы другие клиенты тоже его увидели
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
        console.log(`Отправлено сообщение клиенту: ${message.toString()}`);
      }
    });

    const { text, sender } = JSON.parse(message);
    Message.create({ text, sender });
  });

  ws.on('close', () => {
    console.log('Клиент отключился');
  });
});

module.exports = wss;