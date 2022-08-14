// const router = require('express').Router();
// const bcrypt = require('bcryptjs');
//
// const jwt = require('jsonwebtoken');
// const TOKEN_SECRET = 'secret';
// const { added, checkUsername } = require('./auth-middleware');
//
//
// const buildToken = user => {
//     const payload = {
//         subject: user.id,
//         username: user.username,
//         role: user.role,
//     }
//     const options = {
//         expiresIn: '1d',
//     }
//     return jwt.sign(payload, TOKEN_SECRET, options);
// }
//
// router.post('/register', added, async (req, res, next) => {
//
// })
//
//
// router.post('/login',   checkUsername, (req, res, next) => {
//     let { username, password } = req.body;
//     let user = req.user;
//
//     if(user && bcrypt.compareSync(password, user.password)) {
//         console.log(user)
//         const token = buildToken({...user, role: "user"})
//         res.status(200).json({message: `Welcome back ${user.username}`, token, user})
//     }
//     else next({status: 401, message: 'Invalid Credentials'})
// })
//
//
//
//
// module.exports = router;
//
//
//
//
//
//
//
//
//
//
//
//
//



















