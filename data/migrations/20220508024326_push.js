
exports.up = function(knex) {
    return knex.schema
        .createTable('push', tbl => {
            tbl.increments('push_id')
            tbl.integer('exercise')
                .notNullable()
                .unsigned()
                .unique()
                .references('exercise_id')
                .inTable('exercise')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            tbl.integer('max_weight').notNullable()

        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('push');
};
