const router = require('express').Router();
const Users = require('./user-model');


/** gets all users **/
router.get('/', (req, res, next)=> {
    Users.getAllUsers()
        .then(users => res.json(users))
        .catch(next)
})

router.get('/:id', (req, res, next)=> {
    const { id } = req.params;

    Users.getUserById(id)
        .then(user => res.json(user))
        .catch(next)
})

router.get('/:name/:value', (req, res, next) => {
    const { name, value } = req.params;

    Users.getUser(name, value)
        .then(user => res.json(user))
        .catch(next)
})

router.post('/addNewUser', (req, res, next) => {

    const { newUser } = req.body;

    console.log(req.body)
    Users.addUser(req.body)
        .then(addedUser => res.json(addedUser))
        .catch(next)

})

module.exports = router;











































