require('dotenv').config();
const express = require('express');
const router = express.Router();
const events = require('events');
const { Message } = require('./models');

const emitter = new events.EventEmitter();

// Маршрут для получения всех сообщений
router.get('/messages', async (req, res) => {
  try {
    const messages = await Message.findAll();
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Маршрут для подключения к eventsource
router.get('/connect', async (req, res) => {
  res.writeHead(200, {
    'Connection': 'keep-alive',
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': process.env.REACT_APP_URL,
  })
  emitter.on('newMessage', (message) => {
      res.write(`data: ${JSON.stringify(message)} \n\n`)
  })
});

// Маршрут для отправки сообщения
router.post('/messages', async (req, res) => {
  const { text, sender } = req.body;

  try {
    const message = await Message.create({ text, sender });
    emitter.emit('newMessage', message);
    res.status(201).json(message);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Другие маршруты и контроллеры могут быть добавлены здесь

module.exports = router;
