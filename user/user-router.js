const router = require('express').Router()
const userModel = require('./user-model')

router.get('/',(req,res) => {
    res.status(200).json({
        message: "welcome to this endpoint. Its working"
    })
})
module.exports = router;