const express = require('express');
const authRouter = require('./auth/auth-router');
const cors = require('cors');
const helmet = require('helmet');
const userRouter = require('./user/userRouter');
const exerciseRouter = require('./exercise/exercise-router');
const weightRouter = require('./weight/weight-router');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use('/api/user', userRouter);
server.use('/api/exercise', exerciseRouter);
server.use('/api/weight', weightRouter);

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











































