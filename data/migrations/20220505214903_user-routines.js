
exports.up = function(knex) {
    return knex.schema
        .createTable('user-routines', tbl => {
            tbl.increments('routine_id')
            tbl.integer('user_id')

        })
  
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('user-routines');
};
