
exports.up = async function(knex) {
  await knex.schema.createTable("users", (user) => {
      user.increments("id")
      user.string("name",255).notNullable()
      user.string("username",255).notNullable().unique()
      user.boolean("org").defaultTo(false)
      user.string("password",255).notNullable()
      user.string("email")
      user.string("bio")
  })

  await knex.schema.createTable("organizer", (org) => {
    org.increments("id")
    org.string("name",255).notNullable()
    org.string("username",255).notNullable()
    org.boolean("org").defaultTo(true)
    org.string("password",255).notNullable()
    org.string("email")
    org.string("bio")

})
  await knex.schema.createTable("experience", (exp) => {
    exp.increments("id")
    exp.integer('organizer_id').unsigned().notNullable().references('id').inTable("organizer").onUpdate('CASCADE').onDelete('CASCADE')
    exp.string("location").notNullable()
    exp.string("description").notNullable()
    exp.float("lat")
    exp.float("long")
    exp.date("date")
    exp.boolean("private").defaultTo(false)
    exp.string("type").notNullable()
    exp.string("imgurl")
    exp.string("duration").notNullable()
    exp.string("title").notNullable()
    
})


};

exports.down = function(knex) {
  return knex.schema
  
  .dropTableIfExists('experience')
.dropTableIfExists('organizer')
.dropTableIfExists('users')

};
