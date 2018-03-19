require('dotenv').config();
const express = require('express')
    , app = express()
    , bodyParser = require('body-parser')
    , massive = require('massive');

const { SERVER_PORT, CONNECTION_STRING } = process.env;

const breeds = require('./Controllers/breeds');
const frontEnd = require('./Controllers/frontEnd');

app.use(bodyParser.json());

app.get('/api/breedList', breeds.breedList);
app.post('/api/new', breeds.new);
app.get('/api/breed/:id', breeds.detail);
app.delete('/api/breed/:id', breeds.delete);
app.get('/api/all', breeds.all);
app.put('/api/breed/:id', breeds.update);
app.get('/api/photos/:id', frontEnd.photos);
app.get('/api/spotlight', frontEnd.spotlight);
app.get('/api/update/:id', breeds.getUpdate);
app.put('/api/spotlight/:id', breeds.addSpotlight);
app.get('/api/explore', frontEnd.explore);
app.post('/api/quiz', frontEnd.quiz);



massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(SERVER_PORT, () => { console.log(`Sending peace, love, and positivity from port ${SERVER_PORT}`) })
})