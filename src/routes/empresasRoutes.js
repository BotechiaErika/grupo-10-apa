const empresasController = require('../controllers/empresasControllers.js')
const express = require('express');
const router = express.Router();

/* ROUTER PARA COLLECCION EMPRESAS  */

router.get('/cadastro', empresasController.cadastroEmpresa);

module.exports = router