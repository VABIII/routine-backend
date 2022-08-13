
exports.up = function(knex) {
  return knex.schema
      .createTable('user', tbl => {
          tbl.increments('user_id')
          tbl.string('username', 255).unique().notNullable()
          tbl.string('fullname', 255).notNullable()
          tbl.string('email', 255).notNullable()
          tbl.string('role', 255).notNullable()
          tbl.string('password', 255).notNullable()

      })
};

exports.down = function(knex) {
  return knex.schema
      .dropTableIfExists('user')
};
