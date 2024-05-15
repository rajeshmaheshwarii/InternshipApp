const mysql = require('mysql');

// Database connection configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'internship_app' // Replace with your actual database name
});

// Connect to the MySQL database
connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = connection;
