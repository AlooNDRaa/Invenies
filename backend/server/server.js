import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();

const app = express();
const PORT = 3000;
const API_URL = 'https://jsonplaceholder.typicode.com/users';

app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado a la base de datos MySQL');
});

app.get('/api/users', async (req, res) => {
  try {
    const response = await fetch(API_URL);
    const users = await response.json();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos' });
  }
});

app.get('/api/users/new', async (req, res) => {
    try {
      const sql = 'SELECT * FROM users';
      db.query(sql, (err, results) => {
        if (err) {
          console.error('Error al obtener usuarios desde la base de datos:', err);
          res.status(500).json({ error: 'Error al obtener los datos' });
        } else {
          res.json(results);
        }
      });
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      res.status(500).json({ error: 'Error al obtener los datos' });
    }
  });

app.post('/api/users/new', (req, res) => {
  const { name, username, email, address, city, phone, company } = req.body;

  const sql = `INSERT INTO users (name, username, email, address, city, phone, company) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  db.query(sql, [name, username, email, address, city, phone, company], (err, result) => {
    if (err) {
      console.error('Error al insertar usuario:', err);
      res.status(500).send('Error al guardar usuario en la base de datos');
    } else {
      console.log('Usuario insertado correctamente:', result);
      res.status(200).send('Usuario insertado correctamente');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
