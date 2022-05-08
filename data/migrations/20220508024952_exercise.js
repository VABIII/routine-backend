
exports.up = function(knex) {
    return knex.schema
        .createTable('exercise', tbl => {
            tbl.increments('exercise_id')
            tbl.string('name').notNullable()
        })
};

exports.down = function(knex) {
  return knex.schema
      .dropTableIfExists('exercise');
};
