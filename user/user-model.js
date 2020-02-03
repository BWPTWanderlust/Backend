const bcrypt = require("bcryptjs")
const db = require('../data/dbConfig')

module.exports = {
    add,
    findById,
    findBy,
    getUserInfo
}

async function add(user){
    user.password = await bcrypt.hash(user.password,10)
    const [id] = await db("users")
    .insert(user)
    console.log(id)
  return  findById(id)
}

async function findById(id){
    return db("users")
    .where({id})
    .first("id", "username","name")
}
function findBy(filter){
    return db("users")
    .where(filter)
    .select("id", "username", "password")
}
function getUserInfo(id){
    return db("users")
    .where({id})
    .first("id","username","name","email","bio",)
}