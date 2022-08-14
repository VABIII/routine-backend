
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('exercise').del()
    .then(function () {
      // Inserts seed entries
      return knex('exercise').insert([
        {userId: 1}
        // {id: 2, colName: 'rowValue2'},
        // {id: 3, colName: 'rowValue3'}
      ]);
    });
};
