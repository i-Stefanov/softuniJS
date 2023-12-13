const router = require('express').Router();

const animalService = require('../services/animalServices');

router.get('/', async (req, res) => {
    let animal = await animalService.findTheThree();
    animal = animal.slice(0, 3);
    res.render('home', { animal });
});

router.get('/search', async (req, res) => {
    let animalText = req.query.search;

    let animal = await animalService.search(animalText);

    if (animal == undefined) {
        animal = await animalService.getAll();
    }

    res.render('search', { animal })
})

module.exports = router;