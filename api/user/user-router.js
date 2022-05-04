const router = require('express').Router();



router.get('', (req, res, next) => {
    res.json({message: `Hi user!`})

})


module.exports = router;









































