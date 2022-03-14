const mainController = require('../controllers/mainControllers.js')
const express = require('express');
const router = express.Router();

/* ROUTER PARA COLLECCION MAIN  */
router.get('/', mainController.indexPage)
router.get('/empresas', mainController.empresas)

module.exports = router;