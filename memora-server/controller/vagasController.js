const db = require('../config/db');

// 1. Listar todas as vagas
exports.listarVagas = (req, res) => {
    const query = 'SELECT * FROM vagas WHERE status = "ativa" ORDER BY id DESC';
    db.query(query, (err, results) => {
        if (err) {
            console.error('ERRO AO BUSCAR VAGAS:', err);
            return res.status(500).json({ error: 'Erro ao buscar vagas.' });
        }
        res.json(results);
    });
};

// 2. Buscar uma única vaga por ID
exports.buscarVagaPorId = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM vagas WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('ERRO AO BUSCAR VAGA POR ID:', err);
            return res.status(500).json({ error: 'Erro ao buscar os detalhes da vaga.' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Vaga não encontrada.' });
        }
        res.json(results[0]);
    });
};

// 3. Criar nova vaga
exports.criarVaga = (req, res) => {
    const { titulo, categoria, descricao_curta, imagem, data_criacao, link_url } = req.body;
    const query = `
        INSERT INTO vagas (titulo, categoria, descricao_curta, imagem, data_criacao, link_url) 
        VALUES (?, ?, ?, ?, ?, ?)
    `;
    db.query(query, [titulo, categoria, descricao_curta, imagem, data_criacao, link_url], (err, result) => {
        if (err) {
            console.error('ERRO DO BANCO DE DADOS (INSERT):', err);
            return res.status(500).json({ error: 'Erro ao inserir a vaga no banco.', detalhes: err.message });
        }
        res.status(201).json({ message: 'Vaga criada com sucesso!', id: result.insertId });
    });
};

// 4. Atualizar uma vaga existente (NOVO método para Editar)
exports.atualizarVaga = (req, res) => {
    const { id } = req.params;
    const { titulo, categoria, descricao_curta, imagem, data_criacao, link_url } = req.body;
    
    const query = `
        UPDATE vagas 
        SET titulo = ?, categoria = ?, descricao_curta = ?, imagem = ?, data_criacao = ?, link_url = ? 
        WHERE id = ?
    `;
    
    db.query(
        query, 
        [titulo, categoria, descricao_curta, imagem, data_criacao, link_url, id], 
        (err, result) => {
            if (err) {
                console.error('ERRO DO BANCO DE DADOS (UPDATE):', err);
                return res.status(500).json({ error: 'Erro ao atualizar a vaga no banco.', detalhes: err.message });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Vaga não encontrada para atualização.' });
            }
            res.json({ message: 'Vaga atualizada com sucesso!' });
        }
    );
};

// 5. Deletar uma vaga permanentemente
exports.deletarVaga = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM vagas WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('ERRO AO DELETAR VAGA:', err);
            return res.status(500).json({ error: 'Erro ao deletar a vaga.' });
        }
        res.json({ message: 'Vaga removida com sucesso!' });
    });
};