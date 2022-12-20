
exports.up = function(knex) {
  return knex.schema
      .createTable('exerciseType', tbl => {
          tbl.increments('typeId')
          tbl.integer('type').notNullable()
      })
};

exports.down = function(knex) {
  return knex.schema
      .dropTableIfExists('exerciseType');
};
