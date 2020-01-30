
exports.up = async function(knex) {
  await knex.schema.createTable("users", (user) => {
      user.increments("id")
      user.string("name",255).notNullable()
      user.string("username",255).notNullable()
      user.boolean("org").defaultTo(false)
      user.string("password",255).notNullable()
      user.string("bio")
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
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
