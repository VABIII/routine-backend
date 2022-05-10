const express = require('express');
const userRouter = require('./user/user-router');
const routineRouter = require('./routine/routine-router');
const authRouter = require('./auth/auth-router');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(cors());

server.use('/api/user', userRouter);
server.use('/api/routine', routineRouter);
server.use('/api/auth', authRouter);

server.get('/', (req, res, next) => {
    res.json({api: 'up'});
});

server.use('*', (req, res, next) => {
    res.json({api: 'URL not found'});
});

server.use((err, req, res, next) => {
    res.status(500)
        .json({
            error: err.message,
            stack: err.stack
        });
});



module.exports = server;











































