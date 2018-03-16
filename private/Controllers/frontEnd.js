const axios = require('axios');

module.exports = {
    photos: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        db.gets.ceo(id).then(response => {
            const { ceo } = response[0];
            let promise = axios.get(`${ceo}`).then(response => {
                res.status(200).send(response.data.message)
            }).catch(err => res.status(500).send(err))
        }).catch(err => res.status(500).send(err))
    },
    spotlight: (req, res) => {
        const db = req.app.get('db');
        db.gets.spotlights().then(breeds => {
            res.status(200).send(breeds)
        }).catch(err => res.status(500).send(err))
    },
    explore: (req, res) => {
        const db = req.app.get('db');
        db.gets.explore().then(breeds => {
            res.status(200).send(breeds)
        }).catch(err => res.status(500).send(err))
    }
}