const db = require('../../data/db-config');

const getRoutineByUserId = userId => {
// const getRoutineByUserId = (userId, type) => {

    const routine = db('user AS u')
        .innerJoin('exercise AS e', 'u.userId', 'e.userId')
        .innerJoin('weight AS w', 'e.exerciseId', 'w.exerciseId')
        .innerJoin('exerciseType AS et', 'e.exerciseId', 'et.exerciseId')
        .select('u.userId', 'u.fullname', 'u.role', 'e.exerciseId', 'et.type',
            'et.exerciseName', 'w.maxWeight')
        .where({'u.userId': userId, 'et.type': 'Push'})
        // .where({'u.userId': userId, 'et.type': type})

    return routine;


}




module.exports = {
  getRoutineByUserId,
};











































