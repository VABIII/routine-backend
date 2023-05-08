const calculate = require("../../helpers/routineHelpers");

const DB = require("../../data/db-config");
const Enumerable = require('linq');
const {calculateStrengthWeights} = require("../../helpers/routineHelpers");

const USER_DB = 'user';
const EXERCISE_DB = 'exercise';
const EXERCISE_TYPE_DB = 'exerciseType';
const WEIGHT_DB = 'weight';

const userdb = DB('user');

const getRoutines = async userId => {

    return DB(`${USER_DB} AS u`)
        .join('weight AS w', 'u.userId', 'w.userId')
        .join('exercise AS e', 'w.exerciseId', 'e.exerciseId')
        .join('exerciseType AS et', 'e.typeId', 'et.typeId')
        .where('u.userId', userId)
        .select('e.exerciseName', 'et.type', 'w.maxWeight');



}

const getUserRoutineByType = async (userId, typeId) => {

    const x = await DB(`${USER_DB} AS u`)
        .join('weight AS w', 'u.userId', 'w.userId')
        .join('exercise AS e', 'w.exerciseId', 'e.exerciseId')
        .join('exerciseType AS et', 'e.typeId', 'et.typeId')
        .where('u.userId', userId)
        .where('et.typeId', typeId)
        .select('e.exerciseName', 'et.type', 'w.maxWeight');

    return x;
};




const addRoutine = async (userId, routine) => {

    let weight = {
        userId,
        maxWeight: routine.maxWeight,
        exerciseId: routine.exerciseId
    };
    return DB('weight').insert(weight);
};

const buildStrengthReps = async (userId, typeId) => {
    const exercises = await getUserRoutineByType(userId, typeId);
    let routines = [];

    exercises.forEach(x => {
        const name = x.exerciseName;
        const weights = calculateStrengthWeights(Math.round(x.maxWeight));
        let routine = {[name]: weights};

        routines.push(routine)

    })

    return routines;

}

module.exports = {
    getRoutines,
    getUserRoutineByType,
    addRoutine,
    buildStrengthReps,
};

















































