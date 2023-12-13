const router = require('express').Router();
const authServices = require('../services/authServices');
const { isGuest, isAuth } = require('../middleware/authMiddleware');
const { AUTH_COOKIE_NAME } = require('../constants');

router.get('/login', isGuest, (req, res) => {
    res.render('auth/login');
});

router.post('/login', isGuest, async (req, res) => {
    const { email, password } = req.body;

    try {
        let token = await authServices.login({
            email,
            password
        });

        res.cookie(AUTH_COOKIE_NAME, token);
        res.redirect('/');
    } catch (error) {
        res.render('auth/login', { error: error.message });
    }

});

router.get('/register', isGuest, (req, res) => {
    res.render('auth/register');
});

router.post('/register', isGuest, async (req, res) => {
    console.log(req.body);
    const { email, username, password, rePassword } = req.body;

    if (password !== rePassword) {
        res.locals.error = 'Passwords do not match!'
        return res.render('auth/register')
    };

    try {

        await authServices.register({
            email,
            username,
            password
        });

        res.redirect('/')
    } catch (error) {
        res.render('auth/register', { error: error.message });
    }

});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie(AUTH_COOKIE_NAME);
    res.redirect('/');
});

module.exports = router;