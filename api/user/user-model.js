const db = require('../../data/db-config');

const getAllUsers = () => {
    return db('user');
}

const getUserById = id => {
    return db('user')
        .where('userId', id)

}

const getUser = (name, value) => {
    return db('user')
        .where(name, value)

}

const addUser = async newUser => {
    const [ addedUser ] = await db('user')
        .insert(newUser, [
            'userId',
            'userName',
            'fullName',
            'email',
            'role',
        ])
    return addedUser;

}


module.exports = {
    getAllUsers,
    getUserById,
    getUser,
    addUser,
}












































