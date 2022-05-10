const db = require('../../data/db-config');

const getRoutine = id => {
    return db('routines')
        .where('routine_id', id)
        .first()

}


const addRoutine = async newRoutine => {
    const [routine_id] = await db('user-routines')
        .insert(newRoutine)
    return routine_id
}




module.exports = {
    getRoutine,
    addRoutine,

}











































