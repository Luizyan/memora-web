const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '955644173Dd#',
  database: 'memora_sql'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar:', err);
    return;
  }

  console.log('Conectado ao MySQL!');
});

module.exports = connection;