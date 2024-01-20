const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const rafflesController = require('./controllers/rafflesController');

app.use('/raffles', rafflesController);

app.get('/', (req, res) => {
    res.status(200).json({payload: 'Welcome! Service is running.'});
});

app.get('*', (req,res) => {
    res.status(404).json({payload: 'Oops! Error: Page Not Found'});
});

module.exports = app;