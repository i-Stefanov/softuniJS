const router = require('express').Router();

const { isUser } = require('../middleware/guards');
const preload = require('../middleware/preload');
const { getAllAuctions, getAuctionsByUser } = require('../services/auction');

const categories = {
    estate: 'Real Estate',
    vehicles: 'Vehicles',
    furniture: 'Furniture',
    electronics: 'Electronics',
    other: 'Other'
};

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/catalog', async (req, res) => {
    const auctions = await getAllAuctions();
    res.render('catalog', { title: 'Catalog', auctions });
});

router.get('/catalog/:id', preload(true), (req, res) => {
    const auction = res.locals.auction;
    auction.category = categories[auction.category];
    auction.ownerName = `${auction.owner.firstName} ${auction.owner.lastName}`;

    if (req.session.user) {
        auction.hasUser = true;
        auction.isOwner = req.session.user._id == auction.owner._id;
        auction.canBid = !auction.isOwner && req.session.user._id != auction.bidder?._id;
    }
    res.render('details', { title: 'Auction Details' });
});

router.get('/profile', isUser(), async (req, res) => {
    const auctions = await getAuctionsByUser(req.session.user._id);
    res.render('profile', { title: 'Closed Auction', auctions });
});

module.exports = router;