
exports.up = function(knex) {
  return knex.schema
      .createTable('weight', tbl => {
          tbl.increments('weightId')
          tbl.integer('maxWeight')
          tbl.integer('userId')
              .unsigned()
              // .notNullable()
              .references('userId')
              .inTable('user')
              .onDelete('CASCADE')
              .onUpdate('CASCADE')
          tbl.integer('exerciseId')
              .unsigned()
              // .notNullable()
              .references('exerciseId')
              .inTable('exercise')
              .onDelete('CASCADE')
              .onUpdate('CASCADE')
      })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('weight')
};
