const express = require('express')
const helmet = require('helmet')
const userRouter = require('../user/user-router')
const server = express()
server.use(helmet())
server.use(express.json())

server.use('/api/user',userRouter)
module.exports = server;