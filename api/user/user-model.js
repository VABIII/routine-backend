const db = require('../../data/db-config')

const getUser = id => {
    return db('user')
        .where('user_id', id )
        .select("user_id", "username", "fullName")
        .first()
}

const getByUsername = username => {
    return db('user AS u')
        .where('username', username )
        .select("user_id", "username", "password")
        .first()
}



const addUser = newUser => {
    // const [user_id] = await  db('user')
    //     .insert(newUser)
    // return getUser(user_id)
    return db('user').insert(newUser)
}

module.exports = {
    addUser,
    getUser,
    getByUsername,
}












































