const {Router} = require('express');
const router = Router();
const Lesson = require('../model/lesson')

/* get lesson */
router.get('/', (req, res) => {
  res.render('add', {
    title: 'Add lesson',
    isAdd: true
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



  res.redirect('/lessons')
})

module.exports = router;
