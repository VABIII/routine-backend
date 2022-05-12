const router = require('express').Router();
const Push = require('./push-model');

router.post('/add', (req, res, next) => {
    const newPush = req.body;

    Push.addPush(newPush)
        .then(resp => {
            res.status(201).json({message: "Added", resp})
        })
        .catch(next)

})

router.get('/:user_id', (req, res, next) => {
    const { user_id } = req.params


})





module.exports = router;
















































