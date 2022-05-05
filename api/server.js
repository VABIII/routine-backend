const express = require('express');
const userRouter = require('./user/user-router')
const cors = require('cors')

const server = express();

server.use(express.json());
server.use(cors());

server.use('/api/user', userRouter);


module.exports = server;











































