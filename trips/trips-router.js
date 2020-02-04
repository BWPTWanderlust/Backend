const router = require('express').Router()
const tripModel = require('./trip-model')

router.get('/',(req,res) => {
    console.log(req.params)

    tripModel.getAllExps()
    .then(exps => {
        res.status(200).json(exps)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            message: "There was an error getting user info"
        })
    })
})




module.exports = router;