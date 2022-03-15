const mainRouter = require('./routes/mainRoutes.js')
const empresaRouter = require('./routes/empresasRoutes.js')
const userRouter = require('./routes/usersRoutes.js')
const productsRouters = require('./routes/productsRoutes.js')
const express = require('express')
const path = require('path')
const app = express()
    //app.use --> uso middleware

app.listen(process.env.PORT || 9698, function() {
    console.log('server corriendo port 9698')
});
app.use(express.static(path.join(__dirname, './../public')));
//;ACTUALIZANDO ENTRY-POINT CON CLASSE CRUD
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, './../public')));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




app.use('/', mainRouter)
app.use('/empresas', empresaRouter)
app.use('/usuarios', userRouter)
app.use('/productos', productsRouters)
app.use('/*', (req, res) => { res.render('error404') })