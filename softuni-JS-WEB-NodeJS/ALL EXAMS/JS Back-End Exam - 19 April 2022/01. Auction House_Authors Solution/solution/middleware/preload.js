const auctionService = require('../services/auction');


function preload(populate) {
    return async function (req, res, next) {
        const id = req.params.id;
        console.log('preload params id', id);

        if (populate) {
            res.locals.auction = await auctionService.getAuctionAndBids(id);
        } else {
            res.locals.auction = await auctionService.getAuctionById(id);
        }

        next();
    };
}

module.exports = preload;