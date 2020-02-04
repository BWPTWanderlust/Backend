const db = require('../data/dbConfig')

module.exports = {
    add,
    findById,
    findBy,
    getAllExps
}

async function add(exp,organizer_id){
    console.log(exp,organizer_id)
    return db("experience")
    .insert({...exp, organizer_id})
}

async function findById(id){
    return db("exps")
    .where({id})
    .first("id")
}
function findBy(filter){
    return db("exps")
    .where(filter)
    .select("id", "username", "password")
}
function getAllExps(){
    console.log("hello")
    return db("organizer as o")
    .innerJoin('experience as e','o.id','e.organizer_id')
    .select("e.id","e.location","e.lat","e.long","e.date","e.private","e.type","e.imgurl","e.duration","e.title","o.name","e.private","e.description")
}
