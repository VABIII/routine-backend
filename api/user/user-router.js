const router = require('express').Router();
const Users = require('./user-model')



router.get('/:user_id', (req, res, next) => {
    const { user_id } = req.params;
    Users.getUser(user_id)
        .then(user => res.status(201).json(user))
        .catch(next)

})

router.post('/register', (req, res, next) => {
    let user = req.body;
    Users.addUser(user.username)
        .then(newUser => {
            res.status(201).json(newUser)
        })
        .catch(next)
})


module.exports = router;





































