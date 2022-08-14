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

module.exports = router;











































