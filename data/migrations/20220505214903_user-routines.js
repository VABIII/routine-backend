
exports.up = function(knex) {
    return knex.schema
        .createTable('user-routines', tbl => {
            tbl.increments('routine_id')
            tbl.integer('user_id')
                .notNullable()
                .unsigned()
                .references('user_id')
                .inTable('user')
                .onUpdate("CASCADE")
                .onDelete("CASCADE")
            tbl.integer('push_id')
                .notNullable()
                .unsigned()
                .references('push_id')
                .inTable('push')
                .onUpdate("CASCADE")
                .onDelete("CASCADE")

        })
  
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('user-routines');
};
