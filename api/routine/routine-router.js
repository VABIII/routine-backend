const router = require('express').Router();
const Routine = require('./routine-model')

router.get('/:routine_id', (req, res, next) => {
    const {routine_id} = req.params;

    Routine.getRoutine(routine_id);

})

router.post('/', (req, res, next) =>{
    let routine = req.body;

    Routine.addRoutine(routine)
        .then(routine => res.status(201).json(routine))
        .then(next)
})














module.exports = router;





























