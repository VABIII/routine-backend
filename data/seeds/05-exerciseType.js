
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('exerciseType').del()
    .then(function () {
      // Inserts seed entries
      return knex('exerciseType').insert([
        {type: 'Push', exerciseName: 'Bench Press', exerciseId: 1},
          {type: 'Leg', exerciseName: 'Squats', exerciseId: 2},
          {type: 'Push', exerciseName: 'Arnold Press', exerciseId: 3},
          {type: 'Pull', exerciseName: 'Bent Over Row', exerciseId: 4},
          {type: 'Pull', exerciseName: 'Preacher Curls', exerciseId: 5},
          {type: 'Leg', exerciseName: 'Deadlift', exerciseId: 6},
      ]);
    });
};
