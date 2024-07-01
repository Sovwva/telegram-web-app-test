const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
window.Telegram = require('telegram');
const tg = window.Telegram.WebApp;


// Middleware для логирования запросов и ответов
app.use((req, res, next) => {
  console.log('Request:', req.method, req.url, req.body);
  const oldSend = res.send;
  res.send = function (data) {
    console.log('Response:', data);
    oldSend.apply(res, arguments);
  };
  next();
});

// Обработка главной страницы
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
