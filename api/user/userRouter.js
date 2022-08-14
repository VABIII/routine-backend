const router = require('express').Router();

router.get('/', (req, res, next)=> {
    res.json({message: 'HEY YOU GUYS!!!!'})
})

router.get('/:id', (req, res, next)=> {
    const { id } = req.params;

    res.json({message: `HEY ${id}!!!!`})
})

module.exports = router;











































