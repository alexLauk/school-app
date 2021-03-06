const createError = require('http-errors');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const exphbs = require('express-handlebars')
const Student = require('./model/student')

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
    const student = await Student.findById('5e31e7a11c9d44000019a51c')
    req.student = student
    console.log(student)
    next()
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

    /* const candidate = await Student.findOne()
    if (!candidate) {
      const student = new Student({
        email: 'student1_school@gmail.com',
        name: 'Fernando Johnson',
        lesson: {items: []},
        groupId: new Object("21K")
      })

      await student.save();
    } */
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
