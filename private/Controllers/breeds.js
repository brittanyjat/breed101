module.exports = {
    breedSearch: (req, res) => {
        const db = req.app.get('db');
        db.breed_list().then(breeds => {
            res.status(200).send(breeds)
        }).catch(err => console.log(err))
    },
    new: (req, res) => {
        const db = req.app.get('db');
        // console.log(req.body);
        const { name, photo, trait1, trait2, trait3 } = req.body;
        db.addBreed(name, photo).then(response => {
            const { id } = response[0];
            db.addTraits(id, trait1, trait2, trait3).then(response => {
                res.status(200).send('Success')
            }).catch(err => console.log(err))
        }).catch(err => console.log(err))
    }
}