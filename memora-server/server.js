const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

/**
 * GET - listar serviços
 */
app.get("/servicos", (req, res) => {
  const sql = "SELECT * FROM servicos";

  db.query(sql, (err, result) => {
    if (err) {
      console.error("Erro GET /servicos:", err);
      return res.status(500).json({ erro: "Erro ao buscar serviços" });
    }

    return res.json(result);
  });
});

/**
 * POST - criar serviço
 */
app.post("/servicos", (req, res) => {
  const { titulo, descricao, conteudo, imagem } = req.body;

  if (!titulo || !descricao || !conteudo) {
    return res.status(400).json({
      erro: "Campos obrigatórios faltando"
    });
  }

  const sql = `
    INSERT INTO servicos (titulo, descricao, conteudo, imagem)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [titulo, descricao, conteudo, imagem || null], (err) => {
    if (err) {
      console.error("Erro POST /servicos:", err);
      return res.status(500).json({ erro: "Erro ao cadastrar serviço" });
    }

    return res.status(201).json({
      mensagem: "Serviço criado com sucesso"
    });
  });
});

/**
 * HEALTH CHECK (importante pra debug)
 */
app.get("/", (req, res) => {
  res.json({ status: "API rodando corretamente" });
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});