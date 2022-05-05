const router = require('express').Router();
const Users = require('./user-model')



router.get('', (req, res, next) => {
    res.json({message: `Hi user!`})

})

router.post('/register', (req, res, next) => {
    let user = req.body;

    Users.addUser(user)
        .then(newUser => res.status(201).json(newUser))
        .catch(next)
})


module.exports = router;









































