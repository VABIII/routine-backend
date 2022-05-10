const bcrypt = require('bcryptjs');
const User = require('../user/user-model');


const added = (req, res, next) => {
    let user = req.body;
    user.password = bcrypt.hashSync(user.password, 8);
    User.addUser(user)
        .then(added => {
            req.body = added
            res.status(201).json({added})
        })
        .catch(next)
}


module.exports = {
    added
}










































