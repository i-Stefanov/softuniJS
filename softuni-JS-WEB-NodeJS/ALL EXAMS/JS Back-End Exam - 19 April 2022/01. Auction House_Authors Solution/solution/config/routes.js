const authController = require('../controllers/auth');
const homeController = require('../controllers/home');
const auctionController = require('../controllers/auction');


module.exports = (app) => {
    app.use(authController);
    app.use(homeController);
    app.use(auctionController);

    app.get('*', (req, res) => {
        res.render('404', { title: 'Page Not Found' });
    });
};