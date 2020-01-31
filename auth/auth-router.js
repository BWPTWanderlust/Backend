const router = require('express').Router()
const jwt = require('jsonwebtoken')
const secrets = require("../config/secrets")
const Users = require("../user/user-model")
const bcrypt = require("bcryptjs")

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