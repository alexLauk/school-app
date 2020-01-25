const {Router} = require('express');
const router = Router();

/* GET lessons listing. */
router.get('/', (req, res, next) => {
    res.render('lessons', {
        title: 'Lessons',
        isLessons: true
      })
});

module.exports = router;
