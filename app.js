const createError = require('http-errors');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const exphbs = require('express-handlebars')
const Teacher = require('./model/teacher')

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

app.use( async (req, res, next) => {
  try {
    const teacher = await Teacher.findById('')
    req.teacher = teacher
  } catch (e) {
    console.log(e)
  }

})

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))

app.use('/', homeRoutes);
app.use('/add', addRoutes);
app.use('/lessons', lessonsRoutes);
app.use('/teacher', teacherRoutes);



const PORT = process.env.PORT || 3000;

async function start() {
  try {
    const url = `mongodb+srv://Alex:cBc8m7W96Z3zptfh@cluster0-j9ohx.mongodb.net/school`
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })

    const candidate = await User.findOne()
    if (!candidate) {
      const teacher = new Teacher({
        email: 'teacher_school@gmail.com',
        name: 'Fernando Johnson',
        lesson: {items: []}
      })

      await teacher.save();
    }
    app.listen(PORT, () => {
      console.log(`Server is running ${PORT}`)
    });

  } catch (e) {
    console.log(e)
  }
}

start()
//s3Q@3Z2RB##uUk;
// qwerty3088@gmail.com
module.exports = app;
