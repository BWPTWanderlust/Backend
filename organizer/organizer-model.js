const bcrypt = require("bcryptjs")
const db = require('../data/dbConfig')

module.exports = {
    add,
    findById,
    findBy,
    getAllOrgs,
    getOrgInfo
}

async function add(org){
    org.password = await bcrypt.hash(org.password,14)
    const [id] = await db("organizer")
    .insert(org)
    
  return(findById(id))
}

async function findById(id){
    return db("organizer")
    .where({id})
    .first("id", "username","org")
}
function findBy(filter){
    return db("organizer")
    .where(filter)
    .select("id", "username", "password")
}
function getAllOrgs(){
    return db("organizer")
    .select("id","username","name","email","bio",)
}
function getOrgInfo(id){
    return db("organizer")
    .where({id})
    .first("id","username","name","email","bio",)
}