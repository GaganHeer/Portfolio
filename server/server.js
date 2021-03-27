require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const projectRouter = require('./routes/projects');
const contactRouter = require('./routes/contact');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connected to Mongo DB");
})

app.get('/', (req, res) => {
    res.send('Intro page opened');
});

app.get('/projects', projectRouter);

app.get('/about', (req, res) => {
    res.send('About page opened');
});

app.post('/contact', contactRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));