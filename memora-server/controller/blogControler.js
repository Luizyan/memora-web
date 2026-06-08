const db = require('../config/db'); // Apontando para o seu arquivo de conexão

// Listar todos os posts do blog
exports.listarPosts = (req, res) => {
    const query = 'SELECT * FROM blog ORDER BY id DESC';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        
        // Mapeia os posts para transformar a string de categorias de volta em um Array para o React
        const formatados = results.map(post => ({
            ...post,
            categories: post.categorias ? post.categorias.split(',') : []
        }));
        res.json(formatados);
    });
};

// Buscar um único post por ID (para a página interna dinâmica)
exports.buscarPostPorId = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM blog WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: 'Post não encontrado.' });

        const post = results[0];
        post.categories = post.categorias ? post.categorias.split(',') : [];
        res.json(post);
    });
};

// Criar um novo post (vindo do Admin)
exports.criarPost = (req, res) => {
    const { titulo, excerpt, conteudo, imagem, categories, data_criacao } = req.body;
    
    // Converte o array do React ["PROCESSOS", "TECNOLOGIA"] em string para o MySQL
    const categoriasString = Array.isArray(categories) ? categories.join(',') : categories;

    const query = 'INSERT INTO blog (titulo, excerpt, conteudo, imagem, categorias, data_criacao, comentarios) VALUES (?, ?, ?, ?, ?, ?, 0)';
    db.query(query, [titulo, excerpt, conteudo, imagem, categoriasString, data_criacao], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Post criado com sucesso!', id: result.insertId });
    });
};

// Deletar um post (vindo do Admin)
exports.deletarPost = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM blog WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Post deletado com sucesso!' });
    });
};