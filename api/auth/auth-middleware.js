const bcrypt = require('bcryptjs');
const User = require('../user/user-model');


const added = (req, res, next) => {
    let user = req.body;
    user.password = bcrypt.hashSync(user.password, 8);
    User.addUser(user)
        .then(added => {
            req.body = added
            next(res.status(201).json({added}))
        })
        .catch(next)
}

const checkUsername = async (req, res, next) => {
    const { username } = req.body;

    User.getByUsername(username)
        .then(resp => {
            if(resp) {
                req.user = resp
                next()
            }
            else next({status: 401, message: 'Invalid Credentials'})
        })
        .catch(next)

}


module.exports = {
    added,
    checkUsername,
}










































