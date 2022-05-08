
exports.up = function(knex) {
    return knex.schema
        .createTable('push', tbl => {
            tbl.increments('push_id')
            tbl.integer('routine_id')
                .notNullable()
                .unique()
                .unsigned()
                .references('routine_id')
                .inTable('user-routines')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            tbl.integer('exercise')
                .notNullable()
                .unsigned()
                .unique()
                .references('exercise_id')
                .inTable('exercise')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            tbl.integer('max_weight').notNullable().unique()
            tbl.integer('reps').notNullable().unique()
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('push');
};
