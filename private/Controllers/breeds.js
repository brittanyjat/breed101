module.exports = {
    breedList: (req, res) => {
        const db = req.app.get('db');
        db.gets.breed_list().then(breeds => {
            res.status(200).send(breeds)
        }).catch(err => console.log(err))
    },
    new: (req, res) => {
        const db = req.app.get('db');
        const { name, photo, ceo, description, trait1, trait2, trait3, weight, height, energy, expected, barking, intelligence, playful, affection, train, apartment, cat, dog, child, exercise, health, grooming, shedding } = req.body;

        db.add.add_breed([name, photo, ceo, trait1, trait2, trait3, description, weight, height, energy, expected, barking, intelligence, playful, affection, train, apartment, cat, dog, child, exercise, health, grooming, shedding])
            .then(response => {
                res.status(200).send('Success!')
            }).catch(err => console.log(err))
    },
    detail: (req, res) => {
        const db = req.app.get('db');
        db.gets.breed_detail(req.params.id).then(info => {
            res.status(200).send(info[0])
        }).catch(err => console.log(err))
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
    }
}