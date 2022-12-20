const Routines = require('./routine-model');
const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.json("HEY YOU GUYS!!!!!!!!")

})

/** Returns all user routines by userId **/
router.get('/:id', (req, res, next) => {
    const { id } = req.params;

    Routines.getRoutineByUserId(id)
        .then(routine => res.json(routine))
        .catch(next)
})

/** Adds a new user routine **/
router.post('/:addRoutine', (req, res, next) => {

    Routines.getRoutineByUserId(id)
        .then(routine => res.json(routine))
        .catch(next)
})







module.exports = router;







































