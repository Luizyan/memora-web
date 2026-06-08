const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Puxa a sua conexão ativa com o MySQL

// Rota de POST /login
router.post('/', (req, res) => {
    const { email, senha } = req.body;

    // Busca o administrador na tabela 'admins' do MySQL
    const query = 'SELECT * FROM admins WHERE email = ?';
    
    db.query(query, [email], (err, results) => {
        if (err) {
            console.error('Erro no banco ao fazer login:', err);
            return res.status(500).json({ mensagem: 'Erro interno no servidor de banco de dados.' });
        }

        // Se não encontrar o email
        if (results.length === 0) {
            return res.status(401).json({ mensagem: 'E-mail ou senha incorretos.' });
        }

        const admin = results[0];

        // Comparação de senha simples (visto que no MySQL está salvo '123456')
        if (senha === admin.senha) {
            // Retorna sucesso e um token fictício (já que seu front espera um data.token)
            return res.status(200).json({
                mensagem: 'Login realizado com sucesso!',
                token: 'token-ficticio-memora-admin-session'
            });
        } else {
            return res.status(401).json({ mensagem: 'E-mail ou senha incorretos.' });
        }
    });
});

module.exports = router;