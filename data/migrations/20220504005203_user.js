
exports.up = function(knex) {
    return knex.schema
        .createTable('user', tbl => {
            tbl.increments('user_id')
            tbl.string('username').notNullable()
            tbl.string('fullName').notNullable()
            tbl.string('email').notNullable()
            tbl.string('password').notNullable()
        })
  
};

exports.down = function(knex) {
  return knex.schema
      .dropTableIfExists('user');
};
