
exports.up = function(knex) {
    return knex.schema
        .createTable('exercise', tbl => {
            tbl.increments('exercise_id')
            tbl.string('name').notNullable()
            // tbl.integer('user_id')
            //     .notNullable()
            //     .unsigned()
            //     .references('user_id')
            //     .inTable('user')
            //     .onUpdate("CASCADE")
            //     .onDelete("CASCADE")

        })
};

exports.down = function(knex) {
  return knex.schema
      .dropTableIfExists('exercise');
};
