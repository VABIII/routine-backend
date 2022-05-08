
exports.up = function(knex) {
    return knex.schema
        .createTable('push', tbl => {
            tbl.increments('push_id')
            tbl.string('user_id')
                .notNullable()
                .unsigned()
                .references('user_id')
                .inTable('user')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
};

exports.down = function(knex) {
  return knex.schema
      .dropTableIfExists('push')
};
