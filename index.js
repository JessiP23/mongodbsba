//Library Management
/*
REQUIREMENTS: 
Author {
    name: string,
    books: array,
    life: String,
}

Book {
    title: String,
    author: String,
    description: String,
    published: Date,
}
*/

import express from 'express';
import mongodb from 'mongodb';
import dotenv from 'dotenv';
import bookRouter from './routes/book.js';
import userRouter from './routes/user.js';

dotenv.config();

const PORT = 5050;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to the API");
});

app.use("/books", bookRouter);
app.use('/users', userRouter);

app.use((err, _req, res, next) => {
    res.status(500).send('There is an error');
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})