const db = require('../../data/db-config')

const getUser = id => {
    return db('user')
        .where('user_id', id )
        .select("user_id", "username", "fullName")
        .first()
}

const getByUsername = username => {
    return db('user')
        .where('username', username )
        .select("user_id", "username", "password")
        .first()
}



const addUser = async newUser => {
    const [user_id] = await  db('user')
        .insert(newUser)
    return getUser(user_id)
}

module.exports = {
    addUser,
    getUser,
    getByUsername,
}












































