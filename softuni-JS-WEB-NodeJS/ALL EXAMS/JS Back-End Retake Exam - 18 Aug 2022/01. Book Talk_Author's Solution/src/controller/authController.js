const router = require('express').Router();
const authServices = require('../services/authServices');
const { isGuest, isAuth } = require('../middlewares/authMiddleware');
const { AUTH_COOKIE_NAME } = require('../constants');

router.get('/login', isGuest, (req, res) => {
    res.render('auth/login', { title: 'Login Page' });
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
    res.render('auth/register', { title: 'Register Page' });
});

router.post('/register', isGuest, async (req, res) => {
    const { username, email, password, confPass } = req.body;

    if (password !== confPass) {
        res.locals.error = 'Passwords or Email do not match!'
        return res.render('auth/register')
    };

    try {

        await authServices.register({
            username,
            email,
            password
        });

        res.redirect('/')
    } catch (error) {
        res.render('auth/register', { error: getErrorMessage(error) });
    }

});

function getErrorMessage(error) {
    console.log(error);
    let errorsArr = Object.keys(error.errors);

    if (errorsArr.length > 0) {
        return error.errors[errorsArr[0]];
    } else {
        return error.message
    }

}

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie(AUTH_COOKIE_NAME);
    res.redirect('/');
});

module.exports = router;