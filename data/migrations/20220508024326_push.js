
exports.up = function(knex) {
    return knex.schema
        .createTable('push', tbl => {
            tbl.increments('push_id')
            tbl.integer('user_id')
                .unsigned()
                .unique()
                .references('user_id')
                .inTable('user')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
            tbl.boolean("bench_press").defaultTo(false).unique()
            tbl.integer("max_bench")
            tbl.boolean("incline_bench").defaultTo(false).unique()
            tbl.integer("max_incline")
            tbl.boolean("military_press").defaultTo(false).unique()
            tbl.integer("max_military")
            tbl.boolean("chest_fly").defaultTo(false).unique()
            tbl.integer("max_fly")
            tbl.boolean("reverse_fly").defaultTo(false).unique()
            tbl.integer("max_rev_fly")
            tbl.boolean("tri_pushdown").defaultTo(false).unique()
            tbl.integer("max_tri")
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('push');
};
