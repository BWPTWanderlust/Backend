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
    console.log(req.body)
    tripModel.add(req.body,id)
    .then(response => {
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


//Delet Exp
router.delete('/:id', (req,res) => {
   tripModel.deleteExp(req.params.id)
    .then(resp => {
        res.status(200).json(resp)
    })
    .catch(err => {
        res.status(400).json( {errormessage: "error deleting check that Id exists",err})
    })
})
module.exports = router;