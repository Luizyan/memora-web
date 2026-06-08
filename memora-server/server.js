const express = require('express');
const cors = require('cors');
const rotasServicos = require('./Routes/servicos');
const rotasBlog = require('./Routes/blog'); // <-- LINHA 4: Importando as rotas do blog
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares cruciais (Devem vir obrigatoriamente antes das rotas)
app.use(cors());
app.use(express.json());

// Definição do prefixo da rota base
app.use('/servicos', rotasServicos);
app.use('/blog', rotasBlog); 

// Rota de teste rápido para verificar se o servidor está online no navegador
app.get('/', (req, res) => {
  res.send('Backend da Memora está rodando normalmente!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando perfeitamente na porta ${PORT}`);
});