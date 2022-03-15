const productsControllers = require('./../controllers/productsControllers.js')
const express = require('express');
const router = express.Router();

// ROUTER PARA COLLECCION PRODUCTS
router.get('/', productsControllers.landingProductos)
router.get('/comunas1y2', productsControllers.comunasCABA)
router.get('/comunas3y4', productsControllers.comunasCABA1)
router.get('/comunas5y6', productsControllers.comunasCABA2)
router.get('/comunas7y8', productsControllers.comunasCABA3)
router.get('/comunas9y10', productsControllers.comunasCABA4)
router.get('/comunas11y12', productsControllers.comunasCABA5)
router.get('/comunas12y13', productsControllers.comunasCABA6)
router.get('/comunas14y15', productsControllers.comunasCABA7)
module.exports = router