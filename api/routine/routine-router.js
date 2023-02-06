const Routines = require('./routine-model');
const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.json("HEY YOU GUYS!!!!!!!!")

})

/** Returns all user routines by userId **/
router.get('/:id', (req, res, next) => {
    const { id } = req.params;

    Routines.getRoutines(id)
        .then(routine => res.json(routine))
        .catch(next);
})

/** Returns a user routine by type **/
router.get('/:userId/:typeId', (req, res, next) => {
    const { userId, typeId } = req.params;

    Routines.getUserRoutineByType(userId, typeId)
        .then(routine => res.json(routine))
        .catch(next);

})

/** Adds a new user routine **/
router.post('/:userId/addRoutine', (req, res, next) => {
    const {userId} = req.params;
    const routine = req.body;

    Routines.addRoutine(userId, routine)
        .then(resp => res.json(resp))
        .catch(next)
})







module.exports = router;







































