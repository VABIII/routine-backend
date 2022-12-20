const db = require("../../data/db-config");

const userDb = 'user';
const exerciseDb = 'exercise';
const exerciseTypeDb = 'exerciseType';
const weightDb = 'weight';


const getAllRoutinesByUserId = async userId => {

    return db('user AS u')
        .join('weight AS w', 'u.userId', 'w.userId')
        .join('exercise AS e', 'w.exerciseId', 'e.exerciseId')
        .join('exerciseType AS et', 'e.typeId', 'et.typeId')
        .where('u.userId', userId)
        .select('e.exerciseName', 'et.type', 'w.maxWeight')
}

const getRoutineByType = async (userId, typeId) => {
    return db('user AS u')
        .join('weight AS w', 'u.userId', 'w.userId')
        .join('exercise AS e', 'w.exerciseId', 'e.exerciseId')
        .join('exerciseType AS et', 'e.typeId', 'et.typeId')
        .where('u.userId', userId)
        .where('et.typeId', typeId)
        .select('e.exerciseName', 'et.type', 'w.maxWeight')
}



module.exports = {
    getAllRoutinesByUserId,
    getRoutineByType,
};

















































