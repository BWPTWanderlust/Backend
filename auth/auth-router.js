const router = require('express').Router()
const jwt = require('jsonwebtoken')
const secrets = require("../config/secrets")
const Users = require("../user/user-model")
const Org = require("../organizer/organizer-model")
const bcrypt = require("bcryptjs")

//user registration endpoint
router.post('/register/user', (req, res) => {
    Users.add(req.body)
    
    .then(response => {
        console.log(response)
        res.status(201).json(response)
    })
    .catch( err => {
        res.status(500).json(err)
    })
})
//organizer registration endpoint
router.post('/register/org', (req, res) => {
    Org.add(req.body)
    
    .then(response => {
        console.log(response)
        res.status(201).json(response)
    })
    .catch( err => {
        res.status(500).json(err)
    })
})

//Generate  a Token
function generateToken(user){
    const payload = {
        subject: user.id,
        username: user.username,
    }
    const options = {
        expiresIn: '1d'
    }
    return jwt.sign(payload, secrets.jwtSecret, options)
  }
  module.exports = router;