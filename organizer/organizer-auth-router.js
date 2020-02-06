const router = require('express').Router()
const userModel = require('./organizer-model')




router.get('/:id',(req,res) => {

    userModel.getOrgInfo(req.params.id)
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

    userModel.getAllOrgs()
    .then(info => {
        res.status(200).json(info)
    })
    .catch(err => {
        res.status(400).json({
            message: "There was an error getting user info"
        })
    })
})
module.exports = router