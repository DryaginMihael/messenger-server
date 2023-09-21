const express = require('express');
const router = express.Router();
const { Message } = require('./models');
const wss = require('./webSocket');

// Маршрут для получения всех сообщений
router.get('/messages', async (req, res) => {
    console.log('get');
  try {
    const messages = await Message.findAll();
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Маршрут для отправки сообщения
router.post('/messages', async (req, res) => {
  const { text, sender } = req.body;

  try {
    const message = await Message.create({ text, sender });
    
    res.status(201).json(message);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Другие маршруты и контроллеры могут быть добавлены здесь

module.exports = router;
