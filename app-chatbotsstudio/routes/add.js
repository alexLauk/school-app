const {Router} = require('express');
const router = Router();
const Lesson = require('../model/lesson')
const Teacher = require('../model/teacher')

/* get lesson */
router.get('/', async (req, res) => {
  const teachers = await Teacher.getAll()
  console.log(teachers)
  res.render('add', {
    title: 'Add lesson',
    isAdd: true,
    teachers
  })
});

router.post('/', async (req, res) => {
  const lesson = new Lesson(
      req.body.topic,
      req.body.teacher,
      req.body.group,
      req.body.classroom,
      req.body.dateStart,
      req.body.dateEnd
    )

  await lesson.save()

  const teacher = new Teacher(
    req.body.topic,
    req.body.teacher,
    req.body.group,
    req.body.classroom)

  await teacher.save()

  res.redirect('/lessons')
})

module.exports = router;
