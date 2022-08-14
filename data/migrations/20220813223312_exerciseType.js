
exports.up = function(knex) {
  return knex.schema
      .createTable('exerciseType', tbl => {
          tbl.increments('typeId')
          tbl.integer('type').notNullable()
          tbl.string('exerciseName').notNullable()
          tbl.integer('exerciseId')
              .unsigned()
              .notNullable()
              .references('exerciseId')
              .inTable('exercise')
              .onDelete('CASCADE')
              .onUpdate('CASCADE')
      })
};

exports.down = function(knex) {
  return knex.schema
      .dropTableIfExists('exerciseType');
};
