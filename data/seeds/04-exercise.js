
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('exercise').del()
    .then(function () {
      // Inserts seed entries
      return knex('exercise').insert([
          {exerciseId: 1, exerciseName: "Bench Press", typeId: 1},
          {exerciseId: 2, exerciseName: 'Dumb Bell Shoulder Press', typeId: 1},
          {exerciseId: 3, exerciseName: 'Arnold Shoulder Press', typeId: 1},
          {exerciseId: 4, exerciseName: 'Incline Bench Press', typeId: 1},
          {exerciseId: 5, exerciseName: 'Tricep Push Down', typeId: 1},
          {exerciseId: 6, exerciseName: 'Tricep Extensions', typeId: 1},
          {exerciseId: 7, exerciseName: 'Lat Pull Down', typeId: 2},
          {exerciseId: 8, exerciseName: 'Bent Over Row', typeId: 2},
          {exerciseId: 9, exerciseName: 'Reverse Flys', typeId: 2},
          {exerciseId: 10, exerciseName: 'Tricep Extensions', typeId: 2},
          {exerciseId: 11, exerciseName: 'Dumb Bell Curls', typeId: 2},
          {exerciseId: 12, exerciseName: 'Z Bar Curls', typeId: 2},
          {exerciseId: 13, exerciseName: 'Rear Squats', typeId: 3},
          {exerciseId: 14, exerciseName: 'Deadlift', typeId: 3},

      ]);
    });
};
