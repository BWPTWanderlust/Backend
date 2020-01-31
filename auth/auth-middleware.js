const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWT_SECRET || 'wonderboy'

module.exports = (req,res,next) => {
    if(!req.headers.token){
        res.status(401).json({message: 'token is required check you if are sending in headers'})

    }
    const {token} = req.headers
    const decoded = token
    ? jwt.verify(token,jwtSecret)
    : false

    if (decoded){
        req.token = decoded
        next()

    }
    else{
        res.status(401).json({message:"access denied maybe token invalid"})
    }
}