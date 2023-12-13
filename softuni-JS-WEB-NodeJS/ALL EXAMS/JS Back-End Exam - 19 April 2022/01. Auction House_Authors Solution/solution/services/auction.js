const Auction = require('../models/Auction');
const User = require('../models/User');


async function getAllAuctions() {
    return Auction.find({ closed: false }).lean();
}

async function getAuctionById(id) {
    return Auction.findById(id).lean();
}

async function getAuctionAndBids(id) {
    return Auction.findById(id).populate('owner').populate('bidder').lean();
}

async function createAuction(auction) {
    const result = new Auction(auction);
    await result.save();
}

async function updateAuction(id, auction) {
    const existing = await Auction.findById(id);

    existing.title = auction.title;
    existing.category = auction.category;
    existing.description = auction.description;
    existing.imageUrl = auction.imageUrl;

    if (!existing.bidder) {
        existing.price = auction.price;
    }

    await existing.save();
}

async function deleteById(id) {
    await Auction.findByIdAndDelete(id);
}

async function placeBid(auctionId, amount, userId) {
    const auction = await Auction.findById(auctionId);

    if (auction.bidder == userId) {
        throw new Error('You are already the highest bidder');
    } else if (auction.owner == userId) {
        throw new Error('You cannot bid for your own auction!');
    } else if (amount <= auction.price) {
        throw new Error('Your bid must be higher than the current price');
    }

    auction.bidder = userId;
    auction.price = amount;

    await auction.save();
}

async function getAuctionsByUser(userId) {
    return Auction.find({ owner: userId, closed: true }).populate('bidder').lean();
}

async function closeAuction(id) {
    const auction = await Auction.findById(id);

    if (!auction.bidder) {
        throw new Error('Cannot close auction without bidder!');
    }
    
    auction.closed = true;
    await auction.save();
}

module.exports = {
    getAllAuctions,
    getAuctionsByUser,
    getAuctionById,
    getAuctionAndBids,
    createAuction,
    updateAuction,
    deleteById,
    placeBid,
    closeAuction
};