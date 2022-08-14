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




module.exports = {
    getAllExercises,
    getExerciseByUserId,
    getExerciseByUserIdAndType,
};









































