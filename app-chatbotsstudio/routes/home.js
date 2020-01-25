const {Router} = require('express');
const router = Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Home page',
    isHome: true
  })
});

module.exports = router;
