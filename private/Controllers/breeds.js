module.exports = {
    breedList: (req, res) => {
        const db = req.app.get('db');
        db.breed_list().then(breeds => {
            res.status(200).send(breeds)
        }).catch(err => console.log(err))
    },
    new: (req, res) => {
        const db = req.app.get('db');
        console.log(req.body);
        const { name, photo, ceo, description, trait1, trait2, trait3, weight, height, energy, expected, barking, intelligence, playful, affection, train, apartment, cat, dog, child, exercise, health, grooming, shedding } = req.body;
        db.addBreed(name, photo, ceo, description).then(response => {
            const { id } = response[0];
            db.addTraits(id, trait1, trait2, trait3).then(response => {
                res.status(200).send('Success')
            }).catch(err => console.log(err))
            db.addGenetics(id, weight, height, energy, expected, barking).then(response => {
                res.status(200).send('Success')
            }).catch(err => console.log(err))
            db.addMain(id, intelligence, playful, affection, train).then(response => {
                res.status(200).send('Success')
            }).catch(err => console.log(err))
            db.addAdaptability(id, apartment, cat, dog, child).then(response => {
                res.status(200).send('Success')
            }).catch(err => console.log(err))
            db.addNeeds(id, exercise, health, grooming, shedding).then(response => {
                res.status(200).send('Success')
            }).catch(err => console.log(err))
        }).catch(err => console.log(err))
    }
}