const router = require('express').Router();
const creaturesServices = require('../services/creaturesServices');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/profile', async (req, res) => {
    let userId = req.user._id;

    let creatures = await creaturesServices.getMyCreatedPost(userId);
    let owner = await creaturesServices.findOwner(userId);
    console.log(owner);

    res.render('my-posts', { creatures, owner })
})

module.exports = router;