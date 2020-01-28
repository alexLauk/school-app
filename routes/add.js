const {Router} = require('express');
const router = Router();
const Lesson = require('../model/lesson1')
const Teacher = require('../model/teacher')

/* get lesson */
router.get('/', async (req, res) => {
  const teachers = await Teacher.getAll()
  //console.log(teachers)
  res.render('add', {
    title: 'Add lesson',
    isAdd: true,
    teachers
  })
});

router.post('/', async (req, res) => {

  const lesson = new Lesson({
    topic: req.body.topic,
    teacher: req.body.teacher,
    group: req.body.group,
    classromm: req.body.classroom,
    dateStart: req.body.dateStart,
    dateEnd: req.body.dateEnd
  })

  try {
    await lesson.save()
    res.redirect('/lessons')
  } catch (e) {
    console.log(e)
  }


 /*  const teacher = new Teacher(
    req.body.topic,
    req.body.teacher,
    req.body.group,
    req.body.classroom)

  await teacher.save() */


})

module.exports = router;
