
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('weight').del()
    .then(function () {
      // Inserts seed entries
      return knex('weight').insert([
        {userId: 1, maxWeight: 300},
        // {id: 2, colName: 'rowValue2'},
        // {id: 3, colName: 'rowValue3'}
      ]);
    });
};
