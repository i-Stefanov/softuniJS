const router = require('express').Router();
const gameService = require('../services/gameServices');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/search', async (req, res) => {
    let gameText = req.query.name;
    let gamePlat = req.query.platform;

    let game = await gameService.search(gameText, gamePlat);

    if (game == undefined) {
        game = await gameService.getAll();
    }

    console.log(game);

    res.render('search', { game })
})

module.exports = router;