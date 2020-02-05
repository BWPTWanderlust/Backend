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
        res.status(400).json({
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
        res.status(400).json(err)
    })
})

//Get all of Orgs Exp
router.get('/org/:id/', (req, res) => {
    const id = req.params.id

    tripModel.getOrgsExps(req.params.id)
    .then(response => {
        console.log(response)
        res.status(200).json(response)
    })
    .catch( err => {
        res.status(400).json({message:"an error occured check organizer id is in url"})
    })
})

//Update exp
router.put('/:id', (req,res) => {
    tripModel.updateExp(req.params.id,req.body)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(400).json({message:"an error occured updating check user id exists and you are sending data",err})
    })
})

module.exports = router;