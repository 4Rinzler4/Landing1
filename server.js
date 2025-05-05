const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(express.json());

// Initialize SQLite database
const db = new sqlite3.Database("responses.db", (err) => {
  if (err) console.error(err.message);
  console.log("Connected to SQLite database.");
});

db.run(`CREATE TABLE IF NOT EXISTS responses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT,
  message TEXT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
)`);

// Telegram Bot settings
const TELEGRAM_BOT_TOKEN = process.env.BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.CHAT_ID;
const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`;

// Handle form submission
app.post("/submit", async (req, res) => {
  const { name, email, message } = req.body;

  // Save to database
  db.run(
    `INSERT INTO responses (name, email, message) VALUES (?, ?, ?)`,
    [name, email, message],
    (err) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ message: "Ошибка при сохранении" });
      }
    }
  );

  // Send to Telegram
  const telegramMessage = `Новое сообщение:\nИмя: ${name}\nEmail: ${email}\nСообщение: ${message}`;
  try {
    await axios.post(`${TELEGRAM_API}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text: telegramMessage,
    });
    res.json({ message: "Сообщение отправлено и сохранено!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ошибка при отправке в Telegram" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
