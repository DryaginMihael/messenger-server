require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const events = require('events');
const { Message, User, Chat, ChatMember } = require('./models');

const emitter = new events.EventEmitter();

const SECRET_KEY = 'your-secret-key';

const generateToken = ({ username }) => {
  const payload = {
    username
  }
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' });
};

// Роут для аутентификации и выдачи JWT
router.post('/reg', async (req, res) => {
  const { username, password } = req.body;

  try {
    let user = await User.findOne({
      where: { username }
    });
    if (user) {
      return res.status(401).json({ message: 'Такой пользователь уже есть' });
    }
    // const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, 7);
    user = await User.create({ username, password: hashedPassword });
    const token = generateToken(user);
    res.json({ token, message: 'Пользователь успешно зарегестрирован' });
  } catch (e) {
    res.status(401).json({ message: 'Регистрация не удалась' });
  }
});

// Роут для аутентификации и выдачи JWT
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    where: { username }
  });
  if (user) {
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = generateToken(user);
      res.json({ token, user });
    } else {
      res.status(401).json({ message: 'Неверный пароль' });
    }
  } else {
    res.status(401).json({ message: 'Проверьте правильность введенных данных' });
  }
});

// Маршрут для получения всех пользователей
router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Маршрут для получения всех сообщений
router.get('/messages', async (req, res) => {
  const { userId, recipientId } = req.query;
  try {
    const messages = await Message.findAll({
      where: {
        user_id: userId,
        recipient_id: recipientId
      }
    });
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Маршрут для получения всех сообщений
router.get('/chats', async (req, res) => {
  try {
    const chats = await Chat.findAll();
    res.json(chats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Маршрут для получения всех сообщений
// router.get('/chat-members', async (req, res) => {
//   try {
//     const chats = await ChatMember.findAll();
//     res.json(chats);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Ошибка сервера' });
//   }
// });

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
  const { text, userId, recipientId, chatId } = req.body;

  try {
    const message = await Message.create({
      text,
      user_id: userId,
      recipient_id: recipientId,
      // chat_id: chatId || 0 
    });
    emitter.emit('newMessage', message);
    res.status(201).json(message);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Другие маршруты и контроллеры могут быть добавлены здесь

module.exports = router;
