const {Router} = require('express');
const Lesson = require('../model/lesson')
const router = Router();

/* GET lessons listing. */
router.get('/', async (req, res) => {
    const lessons = await Lesson.find()
        //.populate('student')
        // .select('topic classroom dateStart dateEnd')

    console.log(lessons)

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

    const lesson = await Lesson.findById(req.params.id)
    res.render('edit', {
        title: `Edit ${lesson.topic}`,
        lesson
    })
})

router.post('/edit', async (req, res) => {
    const {id} = req.body
    delete req.body.id
    await Lesson.findByIdAndUpdate(id, req.body)
    res.redirect('/lessons')
})


router.get('/:id/remove', async (req, res) => {
    try {
        await Lesson.deleteOne({_id: req.params.id})
        res.redirect('/lessons')
    } catch (e){
        console.log(e)
    }
})

/* router.get('/:id', (req, res) => {
})
 */
module.exports = router;
