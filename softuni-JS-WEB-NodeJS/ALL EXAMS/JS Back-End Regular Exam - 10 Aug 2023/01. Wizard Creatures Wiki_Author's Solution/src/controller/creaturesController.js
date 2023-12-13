const router = require('express').Router();
const creaturesServices = require('../services/creaturesServices');

const { isAuth } = require('../middleware/authMiddleware');

router.get('/all-posts', async (req, res) => {
    let creatures = await creaturesServices.getAll();
    res.render('creatures/all-posts', { creatures });
});

router.get('/create', (req, res) => {
    res.render('creatures/create')
});

router.post('/create', isAuth, async (req, res) => {
    try {
        await creaturesServices.create({ ...req.body, owner: req.user._id });
        res.redirect('/creatures/all-posts');
    } catch (error) {
        console.log(error);
        res.render('creatures/create', { error: getErrorMessage(error) });
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

router.get('/:id/details', async (req, res) => {
    let creatures = await creaturesServices.getOne(req.params.id);
    let creaturesData = await creatures.toObject();

    let isOwner = creaturesData.owner == req.user?._id;
    let creaturesOwner = await creaturesServices.findOwner(creatures.owner).lean();
    let creatureInfo = creaturesData.voted;

    let emails = [];
    creatureInfo.forEach(x => emails.push(x.email));
    emails.join(', ');
    // console.log(creatureInfo);

    let voted = creatures.getVoted();
    let isVoted = req.user && voted.some(c => c._id == req.user?._id);

    res.render('creatures/details', { ...creaturesData, isOwner, isVoted, creaturesOwner, creatureInfo, emails })
});

async function isOwner(req, res, next) {
    let creatures = await creaturesServices.getOne(req.params.id);

    if (creatures.owner == req.user._id) {
        res.redirect(`/creatures/${req.params.id}/details`);
    } else {
        next();
    }
}

async function checkIsOwner(req, res, next) {
    let creatures = await creaturesServices.getOne(req.params.id);

    if (creatures.owner == req.user._id) {
        next();
    } else {
        res.redirect(`/creatures/${req.params.id}/details`);
    }
};

router.get('/:id/delete', checkIsOwner, async (req, res) => {
    try {
        await creaturesServices.delete(req.params.id);

        res.redirect('/creatures/all-posts');
    } catch (error) {
        res.render('creatures/create', { error: getErrorMessage(error) });
    }

});

router.get('/:id/edit', async (req, res) => {
    let creatures = await creaturesServices.getOne(req.params.id);
    console.log(creatures);
    res.render('creatures/edit', { ...creatures.toObject() })
});

router.post('/:id/edit', checkIsOwner, async (req, res) => {
    try {
        console.log(await creaturesServices.updateOne(req.params.id, req.body));

        res.redirect(`/creatures/${req.params.id}/details`);
    } catch(error) {
        console.log(getErrorMessage(error));
        res.render('creatures/create', { error: getErrorMessage(error) });
    }

});

router.get('/:id/voted', isOwner, async (req, res) => {
    let creatures = await creaturesServices.getOne(req.params.id);

    creatures.voted.push(req.user);
    await creatures.save();

    res.redirect(`/creatures/${req.params.id}/details`);

});

module.exports = router;