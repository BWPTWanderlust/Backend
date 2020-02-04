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

//addExp
router.post('/org/:id/', (req, res) => {
    const id = req.params.id

    tripModel.add(req.body,id)
    .then(response => {
        console.log(response)
        res.status(201).json(response)
    })
    .catch( err => {
        res.status(500).json(err)
    })
})


module.exports = router;