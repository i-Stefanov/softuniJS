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
    const { firstName, lastName, email, password, rePass } = req.body;

    if (password !== rePass) {
        res.locals.error = 'Passwords do not match!'
        return res.render('auth/register')
    };

    try {

        await authServices.register({
            firstName,
            lastName,
            email,
            password
        });

        res.redirect('/');
    } catch (error) {
        res.render('auth/register', { error: getErrorMessage(error) });
    }

});

function getErrorMessage(error) {
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