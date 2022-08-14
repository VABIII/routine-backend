const db = require('../../data/db-config');

const getAllUsers = () => {
    return db('user');
}

const getUserById = id => {
    return db('user')
        .where('userId', id)

}


module.exports = {
    getAllUsers,
    getUserById,
}












































