const express = require('express');
const cors = require('cors');
const rotasServicos = require('./Routes/servicos');
const rotasBlog = require('./Routes/blog');
const rotasVagas = require('./Routes/vagas');
const rotasAuth = require('./Routes/auth'); // <-- 1. ADICIONE ESTA IMPORTAÇÃO

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Definição do prefixo da rota base
app.use('/servicos', rotasServicos);
app.use('/blog', rotasBlog);
app.use('/vagas', rotasVagas);
app.use('/login', rotasAuth); // <-- 2. ADICIONE ESTA ASSOCIAÇÃO DE ROTA

app.get('/', (req, res) => {
    res.send('Backend da Memora está rodando normalmente!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando perfeitamente na porta ${PORT}`);
});