const router = require('express').Router();
const cryptoService = require('../services/cryptoServices');

const { isAuth } = require('../middlewares/authMiddleware');

router.get('/', async (req, res) => {
    let crypto = await cryptoService.getAll();
    res.render('crypto', { crypto });
});

router.get('/create-offer', isAuth, (req, res) => {
    res.render('crypto/create')
});

router.post('/create-offer', isAuth, async (req, res) => {
    try {
        await cryptoService.create({ ...req.body, owner: req.user._id });
        res.redirect('/crypto');
    } catch (error) {
        console.log(error);
        res.render('crypto/create', { error: getErrorMessage(error) });
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

router.get('/:cryptoId/details', async (req, res) => {
    let crypto = await cryptoService.getOne(req.params.cryptoId);

    let cryptoData = await crypto.toObject();

    let isOwner = cryptoData.owner == req.user?._id;
    let buyer = crypto.getBuyers();

    console.log(buyer);

    let isBought = req.user && buyer.some(c => c._id == req.user?._id);

    res.render('crypto/details', { ...cryptoData, isOwner, isBought });
});

async function isOwner(req, res, next) {
    let crypto = await cryptoService.getOne(req.params.cryptoId);

    if (crypto.owner == req.user._id) {
        res.redirect(`/crypto/${req.params.cryptoId}/details`);
    } else {
        next();
    }
}

router.get('/:cryptoId/buy', isOwner, async (req, res) => {
    let crypto = await cryptoService.getOne(req.params.cryptoId);

    crypto.buyer.push(req.user._id);
    await crypto.save();

    res.redirect(`/crypto/${req.params.cryptoId}/details`);

});

async function checkIsOwner(req, res, next) {
    let crypto = await cryptoService.getOne(req.params.cryptoId);

    if (crypto.owner == req.user._id) {
        next();
    } else {
        res.redirect(`/crypto/${req.params.cryptoId}/details`);
    }
}

router.get('/:cryptoId/delete', checkIsOwner, async (req, res) => {
    try {
        await cryptoService.delete(req.params.cryptoId);

        res.redirect('/crypto');
    } catch (error) {
        console.log(error);
        res.render('crypto/create', { error: getErrorMessage(error) });
    }

});

router.get('/:cryptoId/edit', checkIsOwner, async (req, res) => {
    let crypto = await cryptoService.getOne(req.params.cryptoId);

    res.render('crypto/edit', { ...crypto.toObject() });
});

router.post('/:cryptoId/edit', checkIsOwner, async (req, res) => {
    try {
        await cryptoService.updateOne(req.params.cryptoId, req.body);

        res.redirect(`/crypto/${req.params.cryptoId}/details`);
    } catch {
        console.log(error);
        res.render('crypto/create', { error: getErrorMessage(error) });
    }

});

module.exports = router;