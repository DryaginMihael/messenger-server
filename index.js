require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

// Подключение middleware для парсинга JSON
app.use(express.json());

// Подключение middleware CORS
const corsOptions = {
    origin: process.env.REACT_APP_URL,
    optionsSuccessStatus: 204
};
console.log(corsOptions);
app.use(cors(corsOptions));

// Подключение маршрута API
const apiRouter = require('./api');
app.use('/api', apiRouter);

app.get('/', (req, res) => res.send('Hello express'))

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
