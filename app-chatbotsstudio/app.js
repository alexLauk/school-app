const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const exphbs = require('express-handlebars')

const homeRoutes = require('./routes/home');
const addRoutes = require('./routes/add');
const teacherRoutes = require('./routes/teacher');
const lessonsRoutes = require('./routes/lessons');

const app = express();

// view engine setup

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))

app.use('/', homeRoutes);
app.use('/add', addRoutes);
app.use('/lessons', lessonsRoutes);
app.use('/teacher', teacherRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`)
  });



module.exports = app;
