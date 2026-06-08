const express = require('express');
const router = express.Router();
const vagasController = require('../controller/vagasController');

router.get('/', vagasController.listarVagas);
router.get('/:id', vagasController.buscarVagaPorId);
router.post('/', vagasController.criarVaga);
router.put('/:id', vagasController.atualizarVaga);
router.delete('/:id', vagasController.deletarVaga);

module.exports = router;