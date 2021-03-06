const db = require('../data/dbConfig')

module.exports = {
    add,
    getExpById,
    findBy,
    getAllExps,
    getOrgsExps,
    updateExp,
    deleteExp
}

async function add(exp,organizer_id){
    return db("experience")
    .insert({...exp, organizer_id})
}

async function getExpById(id){
    return db("organizer as o")
    .innerJoin('experience as e','o.id','e.organizer_id')
    .select("e.id","e.location","e.lat","e.long","e.date","e.private","e.type","e.imgurl","e.duration","e.title","o.name","e.private","e.description")
    .where("e.id",id)
   
}
function findBy(filter){
    return db("experience as e")
    .select("e.id","e.location","e.lat","e.long","e.date","e.private","e.type","e.imgurl","e.duration","e.title","e.private","e.description")
    .where(filter)
}
function getAllExps(){
    return db("organizer as o")
    .innerJoin('experience as e','o.id','e.organizer_id')
    .select("e.id","e.location","e.lat","e.long","e.date","e.private","e.type","e.imgurl","e.duration","e.title","o.name","e.private","e.description")
}
function getOrgsExps(id){
    return db('experience as e')
    .where('organizer_id',id)

}
function updateExp(id,exp){
    return db('experience')
    .where('id',id)
    .update(exp)
}
async function deleteExp(id){
    await db('experience')
    .where('id',id)
    .del()
    return getAllExps()
}
