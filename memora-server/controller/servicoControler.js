const db = require("../config/db");

// 1. READ ALL (Listar todos os serviços)
exports.listar = (req, res) => {
  const sql = "SELECT * FROM servicos";
  db.query(sql, (err, result) => {
    if (err) {
      console.error(" Erro ao buscar serviços:", err);
      return res.status(500).json({ erro: "Erro ao buscar serviços" });
    }
    res.json(result);
  });
};

// 2. READ BY ID (Buscar apenas um serviço por ID)
exports.buscarPorId = (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM servicos WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error(" Erro ao buscar o serviço:", err);
      return res.status(500).json({ erro: "Erro interno no servidor" });
    }
    if (result.length === 0) {
      return res.status(404).json({ erro: "Serviço não encontrado" });
    }
    res.json(result[0]);
  });
};

// 3. CREATE (Criar novo serviço/card)
exports.criar = (req, res) => {
  const { titulo, descricao, imagem, conteudo } = req.body; 

  if (!titulo || !descricao) {
    return res.status(400).json({ erro: "Título e descrição são obrigatórios." });
  }

  const sql = "INSERT INTO servicos (titulo, descricao, imagem, conteudo) VALUES (?, ?, ?, ?)";
  db.query(sql, [titulo, descricao, imagem, conteudo], (err, result) => {
    if (err) {
      console.error("Erro ao inserir serviço:", err.message);
      return res.status(500).json({ erro: "Erro ao salvar o serviço no banco." });
    }
    res.status(201).json({ 
      mensagem: "Serviço cadastrado com sucesso!", 
      id: result.insertId,
      titulo,
      descricao,
      imagem,
      conteudo
    });
  });
};

// 4. UPDATE (Atualizar dados de um card existente - CORRIGIDO E BLINDADO)
exports.atualizar = (req, res) => {
  const id = parseInt(req.params.id, 10); // Garante que o ID é interpretado como número puro
  const { titulo, descricao, imagem, conteudo } = req.body;

  if (!titulo || !descricao) {
    return res.status(400).json({ erro: "Título e descrição são obrigatórios." });
  }

  const sql = "UPDATE servicos SET titulo = ?, descricao = ?, imagem = ?, conteudo = ? WHERE id = ?";
  
  db.query(sql, [titulo, descricao, imagem, conteudo, id], (err, result) => {
    if (err) {
      // Devolve o erro exato do MySQL diretamente no terminal do Node.js para diagnóstico rápido
      console.error(" Erro crítico no MySQL ao atualizar:", err.message);
      return res.status(500).json({ erro: "Erro interno ao atualizar no banco.", detalhe: err.message });
    }
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ erro: "Serviço não encontrado no banco de dados." });
    }
    
    console.log(` Serviço ID ${id} atualizado com sucesso via painel.`);
    res.json({ mensagem: "Serviço atualizado com sucesso!" });
  });
};

// 5. DELETE (Excluir um card permanentemente)
exports.deletar = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM servicos WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error(" Erro ao deletar serviço:", err);
      return res.status(500).json({ erro: "Erro interno ao deletar no banco." });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ erro: "Serviço não encontrado." });
    }
    res.json({ mensagem: "Serviço excluído com sucesso!" });
  });
};