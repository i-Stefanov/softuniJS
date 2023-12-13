const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');
const bookServices = require('../services/bookServices');

router.get('/', (req, res) => {
    res.render('home/home');
});

router.get('/profile', isAuth, async (req, res) => {
    const userId = req.user._id;
    let wished = await bookServices.getMyWishBook(userId);
    res.render('profile', { title: 'Profile', wished });
});

module.exports = router;