const express = require('express');
const router = express.Router();
const servicoController = require('../controller/servicoControler');

// Rotas do CRUD estruturadas
router.get('/', servicoController.listar);
router.get('/:id', servicoController.buscarPorId); 
router.post('/', servicoController.criar);
router.put('/:id', servicoController.atualizar);
router.delete('/:id', servicoController.deletar);

module.exports = router;