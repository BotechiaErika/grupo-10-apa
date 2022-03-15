const mainRouter = require('./routes/mainRoutes.js')
const empresaRouter = require('./routes/empresasRoutes.js')
const express = require('express')
const path = require('path')
const app = express()


app.use(express.static(path.join(__dirname, './../public')));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, './../public')));


app.use('/', mainRouter)
app.use('/empresas', empresaRouter)


app.listen(process.env.PORT || 9698, () => {
    console.log('server corriendo port 9698')
});

module.exports = app