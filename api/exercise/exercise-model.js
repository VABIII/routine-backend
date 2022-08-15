const db = require('../../data/db-config');

const getAllExercises = () => {
    return db('exercise')
}

const getExerciseByUserId = id => {
    return db('exercise')
        .where('userId', id)
}

const getExerciseByUserIdAndType = (id, type) => {
    return db('exercise')
        .where('userId', '=', id)
        .where('typeId', '=', type.type)

}

const addExercise = async rt => {

    const [ exerciseId ] = await db('exercise')
        .insert({userID: rt.userId})

    const type = await db('exerciseType')
        .insert({
            type: rt.type,
            exerciseName: rt.exerciseName,
            exerciseId: exerciseId,
        })
    const weight = await db('weight')
        .insert({
            maxWeight: rt.maxWeight,
            userId: rt.userId,
            exerciseId: exerciseId,
        })
    return [exerciseId, type, weight];
}




module.exports = {
    getAllExercises,
    getExerciseByUserId,
    getExerciseByUserIdAndType,
    addExercise,
};









































