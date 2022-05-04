
exports.up = function(knex) {
    return knex.schema
        .createTable('user', tbl => {
            tbl.increments('user_id')
            tbl.string('user-name').notNullable()
        })
  
};

exports.down = function(knex) {
  return knex.schema
      .dropTableIfExists('user');
};
