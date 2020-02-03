const router = require('express').Router()
const userModel = require('./user-model')

router.get('/:id',(req,res) => {
    console.log(req.params)

    userModel.getUserInfo(req.params.id)
    .then(info => {
        res.status(200).json(info)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            message: "There was an error getting user info"
        })
    })
})




module.exports = router;