
exports.up = async function(knex) {
  await knex.schema.createTable("users", (user) => {
      user.increments("id")
      user.string("name",255).notNullable()
      user.string("username",255).notNullable()
      user.boolean("org").defaultTo(false)
      user.string("password",255).notNullable()
      user.string("email")
  })
  await knex.schema.createTable("experience", (exp) => {
    exp.increments("id")
    exp.string("location").notNullable()
    exp.string("description").notNullable()
    exp.float("lat")
    exp.float("long")
    exp.boolean("private").defaultTo(false)
    exp.string("type").notNullable()
    exp.string("imgurl")
    exp.string("duration").notNullable()

})
await knex.schema.createTable("bio", (table) => {
    table.increments("id")
    table.string("bio").notNullable()
    table.int("user_id").notNullable() 

})
await knex.schema.createTable("organizer", (org) => {
    org.increments("id")
    org.string("name",255).notNullable()
    org.string("username",255).notNullable()
    org.boolean("org").defaultTo(false)
    org.string("password",255).notNullable()
    org.string("email")

})
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
