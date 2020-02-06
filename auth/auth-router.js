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
        console.log(`${response} done`)
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
        res.status(400).json({err})
    })
})
//login org
router.post('/login/org', async (req,res,next) => {
    try {
      const {username,password} = req.body
      const org = await Org.findBy({username}).first()
      const passwordValid = await bcrypt.compare(password,org.password)
      if( org && passwordValid) {
        const token = generateToken(org)
        res.status(200).json({
          message:`Organizer ${org.username} Logged in`,
          token
        })
  
      }
      else{
        res.status(401).json({
          message: "Not Authorized"
        })
      }
    }
    catch(err){
      next(err)
    }
  })
  router.post('/login/user', async (req,res,next) => {
    try {
      const {username,password} = req.body
      const user = await Users.findBy({username}).first()
      const passwordValid = await bcrypt.compare(password,user.password)
      console.log(passwordValid)
      if( user && passwordValid) {
        const token = generateToken(user)
        res.status(200).json({
          message:`User ${user.username} Logged in`,
          token
        })
  
      }
      else{
        res.status(401).json({
          message: "Not Authorized"
        })
      }
    }
    catch(err){
      next(err)
    }
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