const express = require('express')
const path = require('path')
const mainRouter = require('./routes/mainRoutes.js')
const empresaRouter = require('./routes/empresasRoutes.js')
const userRouter = require('./routes/usersRoutes.js')
const productsRouters = require('./routes/productsRoutes.js')
const app = express()
require('dotenv').config
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './../public')));
app.use(express.static(path.join(__dirname, './../public')));
app.use('/', mainRouter)
app.use('/empresas', empresaRouter)
app.use('/usuarios', userRouter)
app.use('/productos', productsRouters)
app.use('/*', (req, res) => { res.render('error404') })
app.listen(process.env.PORT||6969,()=>{
    console.log('corriendo en 6969')
})

module.exports = app.js