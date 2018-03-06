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


massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(SERVER_PORT, () => { console.log(`Sending peace, love, and positivity from port ${SERVER_PORT}`) })
})