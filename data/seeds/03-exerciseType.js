
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('exerciseType').del()
    .then(function () {
      // Inserts seed entries
      return knex('exerciseType').insert([
        {type: 'push', typeId: 1},
        {type: 'pull', typeId: 2},
        {type: 'leg', typeId: 3},
      ]);
    });
};
