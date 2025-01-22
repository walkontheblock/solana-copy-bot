const express = require('express');
const app = express();

// Позволяет Express парсить JSON в теле запроса
app.use(express.json());

// Простейшая проверка - отвечает ли сервер
app.get('/', (req, res) => {
  res.send('Solana Copy Bot is running!');
});

// Эндпойнт, куда Helius будет отправлять уведомления
app.post('/webhook', (req, res) => {
  console.log('=== Received Webhook from Helius ===');
  console.log(JSON.stringify(req.body, null, 2));

  // Здесь будет логика копирования сделок
  // ...

  res.status(200).json({ message: 'OK' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
