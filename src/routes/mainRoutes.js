const mainController = require('../controllers/maincontrollers.js');
const app = require('../app.js')
const express = require('express');
const router = express.Router();

/* ROUTER PARA COLLECCION MAIN  */
router.get('/', mainController.indexPage)
router.get('/home', mainController.landingUser)
router.get('/empresas', mainController.empresas)
router.get('/usuarios', mainController.iniciarSeccion)
module.exports = router