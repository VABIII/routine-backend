
exports.up = function(knex) {
  return knex.schema
      .createTable('exercise', tbl => {
          tbl.increments('exerciseId')
          tbl.integer('userId')
              .unsigned()
              .notNullable()
              .references('userId')
              .inTable('user')
              .onDelete('CASCADE')
              .onUpdate('CASCADE')
      })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('exercise')

};
