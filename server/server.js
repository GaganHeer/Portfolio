require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const projectRouter = require('./routes/projects');
const contactRouter = require('./routes/contact');

const app = express();
const port = process.env.port || 5000;

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}

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