require('dotenv').config();
const express = require('express')
    , app = express()
    , bodyParser = require('body-parser')
    , massive = require('massive');

const { SERVER_PORT, CONNECTION_STRING } = process.env;

const breeds = require('./Controllers/breeds');

app.use(bodyParser.json());



app.get('/api/breedList', breeds.breedList);
app.post('/api/new', breeds.new);
app.get('/api/breed/:id', breeds.detail);
app.delete('/api/breed/:id', breeds.delete);
app.get('/api/all', breeds.all);


massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(SERVER_PORT, () => { console.log(`Sending peace, love, and positivity from port ${SERVER_PORT}`) })
})