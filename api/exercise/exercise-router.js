const router = require('express').Router();
const Exercises = require('./exercise-model');


/** gets all exercises **/
router.get('/', (req, res, next) => {
    Exercises.getAllExercises()
        .then(exs => res.json(exs))
        .catch(next)
})

/** gets all exercises by userId **/
router.get('/:id', (req, res, next) => {
    const { id } = req.params;

    Exercises.getExerciseByUserId(id)
        .then(exs => res.json(exs))
        .catch(next)


})

/**
 adds a new exercise to user account
 Should recieve: {
    userID: int,
    type: str,
    exerciseName: str,
    exerciseId: int,
    maxWeight: int
 }

 **/
router.post('/add', (req, res, next) => {
    Exercises.addExercise(req.body)
        .then(exs => res.json(exs))
        .catch(next)


})


module.exports = router;











































