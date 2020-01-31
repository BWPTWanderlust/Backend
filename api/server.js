const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const auth = require('../auth/auth-middleware')
const authRouter = require('../auth/auth-router')
const userRouter = require('../user/user-router')
const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())


server.use('/api/auth', authRouter)
server.use('/api/user', auth, userRouter)
module.exports = server;