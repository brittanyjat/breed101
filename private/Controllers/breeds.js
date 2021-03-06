module.exports = {
    breedList: (req, res) => {
        const db = req.app.get('db');
        db.gets.breed_list().then(breeds => {
            res.status(200).send(breeds)
        }).catch(err => res.status(500).send(err))
    },
    new: (req, res) => {
        const db = req.app.get('db');
        const { name, photo, ceo, description, trait1, trait2, trait3, weight, height, energy, expected, barking, intelligence, playful, affection, train, apartment, cat, dog, child, exercise, health, grooming, shedding, hypoallergenic } = req.body;

        db.add.add_breed([name, photo, ceo, trait1, trait2, trait3, description, weight, height, energy, expected, barking, intelligence, playful, affection, train, apartment, cat, dog, child, exercise, health, grooming, shedding, hypoallergenic])
            .then(response => {
                res.status(200).send('Success!')
            }).catch(err => res.status(500).send(err))
    },
    detail: (req, res) => {
        const db = req.app.get('db');
        db.gets.breed_detail(req.params.id).then(info => {
            res.status(200).send(info[0])
        }).catch(err => res.status(500).send(err))
    },
    getUpdate: (req, res) => {
        const db = req.app.get('db');
        db.gets.update(req.params.id).then(info => {
            res.status(200).send(info[0])
        }).catch(err => res.status(500).send(err))
    },
    all: (req, res) => {
        const db = req.app.get('db');
        db.gets.all().then(breeds => {
            res.status(200).send(breeds)
        }).catch(err => res.status(500).send(err))
    },
    delete: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        db.delete_breed(id).then(response => {
            db.gets.all().then(newBreedList => {
                res.status(200).send(newBreedList)
            })
        }).catch(err => res.status(500).send(err))
    },
    update: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        const { name, photo, ceo, trait1, trait2, trait3, description, weight, height, energy, expectancy, barking, intelligence, playful, affection, train, apartment, cat, dog, child, exercise, health, grooming, shedding, youtube } = req.body;
        db.update.update_breed([id, name, photo]).then(response => {
            db.update.update_traits([id, ceo, trait1, trait2, trait3, description, weight, height, energy, expectancy, barking, intelligence, playful, affection, train, apartment, cat, dog, child, exercise, health, grooming, shedding, youtube])
                .then(response => {
                    res.status(200).send('Successfully Updated')
                }).catch(err => console.log(err))
        }).catch(err => res.status(500).send(err))
    },
    addSpotlight: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        const { spotlight } = req.body;
        if (spotlight === true) {
            db.update.add_spotlight([id, false]).then(response => {
                res.status(200).send('Successfully removed spotlight')
            }).catch(err => { res.status(500).send(err) })
        } else {
            db.update.add_spotlight([id, true]).then(response => {
                res.status(200).send('Successfully added spotlight')
            }).catch(err => { res.status(500).send(err) })
        }
    }
}

