const {Router} = require('express');
const Lesson = require('../model/lesson')
const router = Router();

/* GET lessons listing. */
router.get('/', async (req, res, next) => {
    const lessons = await Lesson.getAll()
    res.render('lessons', {
        title: 'Lessons',
        isLessons: true,
        lessons
      })
});

router.get('/:id/edit', async (req, res) => {
    if (!req.query.allow) {
       return res.redirect('/')
    }

    const lesson = await Lesson.getById(req.params.id)
    res.render('lesson/edit', {
        title: `Edit ${lesson.topic}`,
        lesson
    })
})

router.post('/edit', async (req, res) => {
    await Lesson.update(req.body)
    res.redirect('/lessons')
})

/* router.get('/:id', (req, res) => {
})
 */
module.exports = router;
