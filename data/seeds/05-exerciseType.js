
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('exerciseType').del()
    .then(function () {
      // Inserts seed entries
      return knex('exerciseType').insert([
        {type: 'Push', exerciseName: 'Bench Press', exerciseId: 1},
        // {id: 2, colName: 'rowValue2'},
        // {id: 3, colName: 'rowValue3'}
      ]);
    });
};
