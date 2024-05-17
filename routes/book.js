import express from 'express';
const router = express.Router();

//GET
router.get('/', (req, res) => {
    res.send('Get all books');
});

router.get('/:id', (req, res) => {
    const bookId = req.params.id;
    res.send(`This is the book with id ${bookId}`);
});

//POST
router.post('/', (req, res) => {
    const dataOfBook = req.body;
    res.send(`Create a new book with data: ${JSON.stringify(dataOfBook)}`);
});

//PUT
router.put('/:id', (req, res) => {
    const bookId = req.params.id;
    const dataOfBook = req.body;
    res.send(`Update book with id ${bookId} and data: ${JSON.stringify(dataOfBook)}`);
});

//DELETE
router.delete('/:id', (req, res) => {
    const bookId = req.params.id;
    res.send(`Delete book with id ${bookId}`);
});

export default router;