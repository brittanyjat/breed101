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
        var value = req.query.value;
        var newValue = req.query.new;
        if (value === 'name') {
            db.update_breed(id, newValue).then(response => {
                res.status(200).send(`Successfully updated name to ${newValue}`)
            }).catch(err => res.status(500).send(err))
        } else if (value === 'photo') {
            db.update_photo(id, newValue).then(response => {
                res.status(200).send(`Successfully updated photo`)
            }).catch(err => console.log(err))
        } else {
            db.update_traits(id, value, newValue).then(response => {
                res.status(200).send(`Successfully Updated ${value} to ${newValue}`)
            }).catch(err => console.log(err))
        }
    }
}

