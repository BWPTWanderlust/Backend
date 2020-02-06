const router = require('express').Router()
const userModel = require('./user-model')

router.get('/:id',(req,res) => {

    userModel.getUserInfo(req.params.id)
    .then(info => {
        res.status(200).json(info)
    })
    .catch(err => {
        res.status(400).json({
            message: "There was an error getting user info"
        })
    })
})


router.get('/',(req,res) => {
    console.log(req.params)

    userModel.getAllUsers()
    .then(info => {
        res.status(200).json(info)
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({
            message: "There was an error getting user info"
        })
    })
})



module.exports = router;