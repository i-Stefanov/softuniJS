const router = require('express').Router();

const bookServices = require('../services/bookServices');
const { isAuth } = require('../middlewares/authMiddleware');

async function isOwner(req, res, next) {
    let book = await bookServices.getOne(req.params.bookId);

    if (book.owner == req.user._id) {
        res.redirect(`/books/${req.params.bookId}/details`);
    } else {
        next();
    }
}

async function checkIsOwner(req, res, next) {
    let book = await bookServices.getOne(req.params.bookId);

    if (book.owner == req.user._id) {
        next();
    } else {
        res.redirect(`/books/${req.params.bookId}/details`);
    }
}

router.get('/catalog', async (req, res) => {
    let book = await bookServices.getAll();
    res.render('books/catalog', { title: 'Book Catalog', book});
});

router.get('/create-review', isAuth, (req, res) => {
    res.render('books/create', { title: 'Create Review' });
});

router.post('/create-review', isAuth, async (req, res) => {
    try {
        await bookServices.create({ ...req.body, owner: req.user._id });
        res.redirect('/books/catalog');
    } catch (error) {
        res.render('books/create', { error: getErrorMessage(error)})
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

router.get('/:bookId/details', async (req, res) => {
    let book = await bookServices.getOne(req.params.bookId);
    let bookData = book.toObject();
    let isOwner = bookData.owner == req.user?._id;

    let wished = book.getWished();

    let isWished = req.user && wished.some(c => c._id == req.user?._id);

    res.render('books/details', { ...bookData, isOwner, isWished });
});

router.get('/:bookId/wish', isOwner, async (req, res) => {
    const bookId = req.params.bookId
    let book = await bookServices.getOne(bookId);

    book.wishingList.push(req.user._id);
    await book.save();
    res.redirect(`/books/${req.params.bookId}/details`);
});

router.get('/:bookId/edit', checkIsOwner, async (req, res) => {
    const bookId = req.params.bookId
    let book = await bookServices.getOne(bookId);
    res.render('books/edit', { ...book.toObject() })
});

router.post('/:bookId/edit', checkIsOwner, async (req, res) => {
    try {
        const bookId = req.params.bookId;
        const bookData = req.body;
        await bookServices.update(bookId, bookData);
        res.redirect(`/books/${bookId}/details`);
    } catch (error) {
        res.render('book/edit', { error: getErrorMessage(error)})
    }
    
});

router.get('/:bookId/delete', checkIsOwner, async (req, res) => {
    const bookId = req.params.bookId;
    await bookServices.delete(bookId);
    res.redirect('/books/catalog');
})

module.exports = router;