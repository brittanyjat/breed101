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
    },
    quiz: (req, res) => {
        const db = req.app.get('db');
        const { energy, affection, shedding, apartment, cats, dogs, children, size } = req.body;
        var newArr = [apartment, cats, dogs, children];

        function converter(arr) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] = true) {
                    arr[i] = 50
                } else {
                    arr[i] = 0
                }
            } return arr
        }
        converter(newArr);
        db.gets.quiz([energy, affection, shedding, newArr[0], newArr[1], newArr[2], newArr[3], size]).then(breeds => {
            res.status(200).send(breeds)
        }).catch(err => console.log(err))
    }
}