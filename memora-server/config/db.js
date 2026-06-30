const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'seu_user',
  password: 'sua_senha#',
  database: 'seu_database'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar:', err);
    return;
  }

  console.log('Conectado ao MySQL!');
});

module.exports = connection;