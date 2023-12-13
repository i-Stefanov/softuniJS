const router = require('express').Router();

const electronicsServices = require('../services/electronicsServices')

router.get('/catalog', async (req, res) => {
    let electronics = await electronicsServices.getAll();
    res.render('electronics/catalog', { electronics });
});

router.get('/create-offer', (req, res) => {
    res.render('electronics/create');
});

router.post('/create-offer', async (req, res) => {
    try {
        await electronicsServices.create({ ...req.body, owner: req.user });
        res.redirect('/electronics/catalog');
    } catch (error) {
        console.log(error);
        res.render('electronics/create', { error: error.message });
    }
});

router.get('/:electronicsId/details', async (req, res) => {
    let electronics = await electronicsServices.getOne(req.params.electronicsId);

    let electronicsData = await electronics.toObject();

    let isOwner = electronicsData.owner == req.user?._id;
    let buyer = electronics.getBuying();

    let isBought = req.user && buyer.some(c => c._id == req.user?._id);

    res.render('electronics/details', { ...electronicsData, isOwner, isBought });
});

router.get('/:electronicsId/buy', async (req, res) => {
    const electronicsId = req.params.electronicsId
    let electronics = await electronicsServices.getOne(electronicsId);

    electronics.buyingList.push(req.user._id);
    await electronics.save();
    res.redirect(`/electronics/${req.params.electronicsId}/details`);
});

router.get('/:electronicsId/edit', async (req, res) => {
    const electronicsId = req.params.electronicsId
    let electronics = await electronicsServices.getOne(electronicsId);
    res.render('electronics/edit', { ...electronics.toObject() })
});

router.post('/:electronicsId/edit', async (req, res) => {
    try {
        const electronicsId = req.params.electronicsId;
        const electronicsData = req.body;
        console.log(electronicsData);
        await electronicsServices.update(electronicsId, electronicsData);
        res.redirect(`/electronics/${electronicsId}/details`);
    } catch (error) {
        res.render('electronics/edit', { error: error.message})
    }

});

router.get('/:electronicsId/delete', async (req, res) => {
    const electronicsId = req.params.electronicsId;
    await electronicsServices.delete(electronicsId);
    res.redirect('/electronics/catalog');
});

router.get('/search', async (req, res) => {
    let electronicsName = req.query.searchName;
    let electronicsType = req.query.searchType;

    console.log(electronicsName);
    console.log(electronicsType);

    let electronics = await electronicsServices.search(electronicsName, electronicsType);

    if(electronics == undefined) {
        electronics = await electronicsServices.getAll();
    }


    res.render('search', {electronics});
});

module.exports = router;