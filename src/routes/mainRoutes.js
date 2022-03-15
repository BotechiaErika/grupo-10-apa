const mainController = require('../controllers/maincontrollers.js');
const app = require('../app.js')
const express = require('express');
const router = express.Router();

/* ROUTER PARA COLLECCION MAIN  */
router.get('/', mainController.indexPage)
router.get('/home', mainController.landingUser)
router.get('/empresas', mainController.iniciarSeccion)
router.get('/usuarios', mainController.ingresarCuenta)
module.exports = router