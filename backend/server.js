const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

const credentials = {
  username: 'admin',
  password: 'password',
};


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysqlpass',
  database: 'restaurant',
  port:3306
});

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL database!');
  });

// Routes
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === credentials.username && password === credentials.password) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Add routes for menu, customers, and orders
app.get('/menu', (req, res) => {
  connection.query('SELECT * FROM menu', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/customers', (req, res) => {
  connection.query('SELECT * FROM customers', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/orders', (req, res) => {
  connection.query('SELECT * FROM orders', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
