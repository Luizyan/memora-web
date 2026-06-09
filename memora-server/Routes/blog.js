const express = require('express');
const router = express.Router();
const blogControler = require('../controller/blogControler');

router.get('/', blogControler.listarPosts);
router.get('/:id', blogControler.buscarPostPorId);
router.post('/', blogControler.criarPost);
router.delete('/:id', blogControler.deletarPost);
router.put('/:id', blogControler.atualizarPost); 

module.exports = router;