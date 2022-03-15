const express = require("express")
const path = require('path')
const app = express()

// use the express-static middleware
app.use(express.static("public"))

// define the first route
// start the server listening for requests

const mainRouter = require('./routes/mainRoutes.js')
const empresaRouter = require('./routes/empresasRoutes.js')
const userRouter = require('./routes/usersRoutes.js')
const productsRouters = require('./routes/productsRoutes.js')

//ACTUALIZANDO ENTRY-POINT CON CLASSE CRUD
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, './../public')));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, './../public')));

// 4 COLECCIONES (main, empresas, usuarios y productos)

app.use('/', mainRouter)
app.use('/empresas', empresaRouter)
app.use('/usuarios', userRouter)
app.use('/productos', productsRouters)
app.use('/*', function(req, res) {
    res.render('main/error404')
})
app.listen(process.env.PORT || 7797, function() {
    console.log('running on 7797')
})