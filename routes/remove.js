const {Router} = require('express');
const router = Router();
const Lesson = require('../model/lesson')
const Teacher = require('../model/teacher')

router.post('/:id/remove', async (req, res) => {
    try {
        await Lesson.deleteOne({_id: req.params.id})
        res.redirect('/lessons')
    } catch (e){
        console.log(e)
    }
})

module.exports = router;
