const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../user/user-model');
const jwt = require('jsonwebtoken');
const TOKEN_SECRET = 'secret';
const { added } = require('./auth-middleware');


const buildToken = user => {
    const payload = {
        subject: user.id,
        username: user.username,
        role: user.role,
    }
    const options = {
        expiresIn: '1d',
    }
    return jwt.sign(payload, TOKEN_SECRET, options);
}

router.post('/register', added, async (req, res, next) => {
    let user = req.body;
    const token = buildToken(user)
    const { id } = req.body;


})





module.exports = router;
































