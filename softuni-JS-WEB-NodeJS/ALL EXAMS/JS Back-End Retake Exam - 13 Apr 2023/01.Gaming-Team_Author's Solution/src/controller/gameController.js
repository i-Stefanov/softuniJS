const router = require('express').Router();
const gameService = require('../services/gameServices');

// const { isAuth } = require('../middlewares/authMiddleware');

router.get('/catalog', async (req, res) => {
    let games = await gameService.getAll();
    res.render('games/catalog', { games });
});

router.get('/create', (req, res) => {
    res.render('games/create')
});

router.post('/create', async (req, res) => {
    try {
        await gameService.create({ ...req.body, owner: req.user._id });
        res.redirect('/games/catalog');
    } catch (error) {
        console.log(error);
        res.render('games/create', { error: getErrorMessage(error) });
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

router.get('/details/:gameId', async (req, res) => {

    let game = await gameService.getOne(req.params.gameId); 
    let gameData = await game.toObject();

    let isOwner = gameData.owner == req.user?._id;
    let buyer = game.getBuyers();
    let isBought = req.user && buyer.some(c => c._id == req.user?._id);

    res.render('games/details', { ...gameData, isOwner, isBought });
});

async function isOwner(req, res, next) {
    let games = await gameService.getOne(req.params.gameId);

    if (games.owner == req.user._id) {
        res.redirect(`/games/details/${req.params.gameId}`);
    } else {
        next();
    }
}

router.get('/buy/:gameId', isOwner, async (req, res) => {
    let games = await gameService.getOne(req.params.gameId);

    games.buyer.push(req.user._id);
    await games.save();

    res.redirect(`/games/details/${req.params.gameId}`);

});

async function checkIsOwner(req, res, next) {
    let games = await gameService.getOne(req.params.gameId);

    if (games.owner == req.user._id) {
        next();
    } else {
        res.redirect(`/games/details/${req.params.gameId}`);
    }
}

router.get('/delete/:gameId', checkIsOwner, async (req, res) => {
    try {
        await gameService.delete(req.params.gameId);

        res.redirect('/games/catalog');
    } catch (error) {
        res.render('games/create', { error: getErrorMessage(error) });
    }

});

router.get('/edit/:gameId', checkIsOwner, async (req, res) => {
    let game = await gameService.getOne(req.params.gameId);

    res.render('games/edit', { ...game.toObject() });
});

router.post('/edit/:gameId', checkIsOwner, async (req, res) => {
    try {
        await gameService.updateOne(req.params.gameId, req.body);

        res.redirect(`/games/details/${req.params.gameId}`);
    } catch {
        res.render('games/create', { error: getErrorMessage(error) });
    }

});

module.exports = router;