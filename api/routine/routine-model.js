const DB = require("../../data/db-config");
const db = require("../../data/db-config");
const USER_DB = 'user';
const EXERCISE_DB = 'exercise';
const EXERCISE_TYPE_DB = 'exerciseType';
const WEIGHT_DB = 'weight';

const getRoutines = async userId => {

    return db(`${USER_DB} AS u`)
        .join('weight AS w', 'u.userId', 'w.userId')
        .join('exercise AS e', 'w.exerciseId', 'e.exerciseId')
        .join('exerciseType AS et', 'e.typeId', 'et.typeId')
        .where('u.userId', userId)
        .select('e.exerciseName', 'et.type', 'w.maxWeight');

}

const getUserRoutineByType = async (userId, typeId) => {

    return DB(`${USER_DB} AS u`)
        .join('weight AS w', 'u.userId', 'w.userId')
        .join('exercise AS e', 'w.exerciseId', 'e.exerciseId')
        .join('exerciseType AS et', 'e.typeId', 'et.typeId')
        .where('u.userId', userId)
        .where('et.typeId', typeId)
        .select('e.exerciseName', 'et.type', 'w.maxWeight');
};

const addRoutine = async (userId, routine) => {

    let weight = {
        userId,
        maxWeight: routine.maxWeight,
        exerciseId: routine.exerciseId
    };
    return DB('weight').insert(weight);
};

module.exports = {
    getRoutines,
    getUserRoutineByType,
    addRoutine,
};

















































