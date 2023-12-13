const router = require('express').Router();
const cryptoService = require('../services/cryptoServices');

router.get('/', (req, res) => {
    res.render('home', { title: 'Home Page' });
});

router.get('/search', async (req, res) => {
    let cryptoText = req.query.text;
    let cryptoPay = req.query.paymentMethod;

    let crypto = await cryptoService.search(cryptoText, cryptoPay);

    if(crypto == undefined) {
        crypto = await cryptoService.getAll();
    }

    console.log(crypto);

    res.render('search', { title: 'Search Crypto', crypto})
})

module.exports = router;