
exports.up = function(knex) {
  return knex.schema
      .createTable('exercise', tbl => {
          tbl.increments('exerciseId')
          tbl.string('exerciseName')
          tbl.integer('typeId')
              .unsigned()
              .notNullable()
              .references('typeId')
              .inTable('exerciseType')
              .onDelete('CASCADE')
              .onUpdate('CASCADE')
      })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('exercise')

};
