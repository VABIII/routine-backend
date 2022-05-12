const db = require('../../data/db-config');

const findPush = push_id => {
    return db('push')
        .where('push_id', push_id)
        .first()
}


const addPush = async newPush => {
    const [id] = await db('push').insert(newPush);
    return findPush(id);
}






module.exports = {
    addPush,
    findPush,
}









































