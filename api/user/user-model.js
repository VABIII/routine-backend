const db = require('../../data/db-config')

const addUser = async newUser => {
    const [addedUser] = await db('user')
        .insert(newUser, ['username', 'fullName'])
    return addedUser
}


module.exports = {
    addUser

}












































