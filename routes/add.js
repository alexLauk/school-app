const {Router} = require('express');
const router = Router();
const Lesson = require('../model/lesson')
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
    teacherName: req.body.teacherName,
    group: req.body.group,
    classroom: req.body.classroom,
    dateStart: req.body.dateStart,
    dateEnd: req.body.dateEnd
  })

  console.log(lesson)

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
