
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('weight').del()
    .then(function () {
      // Inserts seed entries
      return knex('weight').insert([
        {userId: 1, maxWeight: 300, exerciseId: 1},
        {userId: 1, maxWeight: 275, exerciseId: 2},
        {userId: 1, maxWeight: 90, exerciseId: 3},
        {userId: 1, maxWeight: 85, exerciseId: 4},
        {userId: 1, maxWeight: 85, exerciseId: 5},
        {userId: 1, maxWeight: 285, exerciseId: 6},

      ]);
    });
};
