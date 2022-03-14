const mainRouter = require('./routes/mainRoutes.js')
const express = require('express')
const path = require('path')
const app = express()


app.use(express.static(path.join(__dirname, './../public')));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, './../public')));


app.use('/', mainRouter)



app.listen(process.env.PORT || 9697, () => {
    console.log('server corriendo port 9697')
});

module.exports = app