const router = require('express').Router();

const { isUser, isOwner } = require('../middleware/guards');
const preload = require('../middleware/preload');
const { createAuction, updateAuction, deleteById, placeBid, closeAuction } = require('../services/auction');
const mapErrors = require('../util/mappers');


router.get('/create', isUser(), (req, res) => {
    res.render('create', { title: 'Publish Auction', data: {} });
});

router.post('/create', isUser(), async (req, res) => {
    const auction = {
        title: req.body.title,
        category: req.body.category,
        imageUrl: req.body.imageUrl,
        price: Number(req.body.price),
        description: req.body.description,
        owner: req.session.user._id
    };

    try {
        await createAuction(auction);
        res.redirect('/catalog');
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);
        res.render('create', { title: 'Publish Auction', data: auction, errors });
    }
});

router.get('/edit/:id', preload(), isOwner(), (req, res) => {
    const hasBids = res.locals.auction.bidder;
    res.render('edit', { title: 'Edit Auction', hasBids });
});

router.post('/edit/:id', preload(), isOwner(), async (req, res) => {
    const id = req.params.id;

    const auction = {
        title: req.body.title,
        category: req.body.category,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: Number(req.body.price),
    };

    try {
        await updateAuction(id, auction);
        res.redirect('/catalog/' + id);
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);
        auction._id = id;
        res.render('edit', { title: 'Edit Auction', data: auction, errors });
    }
});

router.get('/delete/:id', preload(), isOwner(), async (req, res) => {
    await deleteById(req.params.id);
    res.redirect('/catalog');
});

router.post('/bid/:id', isUser(), async (req, res) => {
    const id = req.params.id;
    const amount = Number(req.body.bidAmount);

    try {
        await placeBid(id, amount, req.session.user._id);
    } catch (err) {
        console.error(err);
        req.session.errors = mapErrors(err);
    } finally {
        res.redirect('/catalog/' + id);
    }
});

router.get('/close/:id', preload(), isOwner(), async (req, res) => {
    const id = req.params.id;

    try {
        await closeAuction(id);
        res.redirect('/profile');
    } catch (err) {
        console.error(err);
        req.session.errors = mapErrors(err);
        res.redirect('/catalog/' + id);
    }
});

module.exports = router;