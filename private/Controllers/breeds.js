module.exports = {
    breedSearch: (req, res) => {
        const db = req.app.get('db');
        db.breed_list().then(breeds => {
            res.status(200).send(breeds)
        }).catch(err => console.log(err))
    }
}