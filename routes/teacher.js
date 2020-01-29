const {Router} = require('express')
const router = Router()
const Teacher = require('../model/teacher')
// const Lessons = require('../model/lesson')

/* router.post('/add', async (req, res) => {
    const lesson = await Lessons.getById(req.body.id)
    await Teacher.add(lesson)
    res.redirect('/teacher')
}) */

router.get('/', async (req,res) => {
    const teacher = await Teacher.getAll()
    res.render('teacher', {
        title: 'Teacher',
        isTeacher: true,
        lessons: teacher.lessons,
        group: teacher.group
    })
})

module.exports = router
