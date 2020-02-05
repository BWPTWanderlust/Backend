const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const auth = require('../auth/auth-middleware')
const authRouter = require('../auth/auth-router')
const userRouter = require('../user/user-router')
const tripRouter = require('../trips/trips-router')
const orgRouter = require('../organizer/organizer-router')
const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())


server.use('/api/auth', authRouter)
 //server.use('/api/user', auth, userRouter)
server.use('/api/exps', tripRouter)
server.use('/api/user',userRouter)
server.use('/api/org',orgRouter)

module.exports = server;