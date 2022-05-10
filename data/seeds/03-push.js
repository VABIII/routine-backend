
exports.seed = function(knex) {
  return knex('push').truncate()
    .then(function () {
        return knex('push').insert([
            {exercise: 1, max_weight: 305},
            {exercise: 2, max_weight: 285},
            {exercise: 13, max_weight: 140},
            {exercise: 14, max_weight: 110},
      ]);
    });
};
