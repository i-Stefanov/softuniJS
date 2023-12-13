const router = require('express').Router();

const homeController = require('./controller/homeController');
const authController = require('./controller/authController');
const creaturesController = require('./controller/creaturesController');

router.use(homeController);
router.use('/auth', authController);
router.use('/creatures', creaturesController);
router.use('/*', (req, res) => {
    res.render('404');
});
router.use('/profile', homeController);
module.exports = router;