const router = require('express').Router();

const homeController = require('./controller/homeController');
const authController = require('./controller/authController');
const bookController = require('./controller/bookController');

router.use('/', homeController);
router.use('/auth', authController);
router.use('/books', bookController);
router.get('/*', (req, res) => {
    res.render('404');
})

module.exports = router;