
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
          {exerciseId: 6, exerciseName: 'Tricep Extension', typeId: 1},
          {exerciseId: 7, exerciseName: 'Lat Pull Down', typeId: 2},
          {exerciseId: 8, exerciseName: 'Bent Over Row', typeId: 2},
          {exerciseId: 9, exerciseName: 'Reverse Fly', typeId: 2},
          {exerciseId: 10, exerciseName: 'Upright Row', typeId: 2},
          {exerciseId: 11, exerciseName: 'Dumb Bell Curl', typeId: 2},
          {exerciseId: 12, exerciseName: 'Hammer Curl', typeId: 2},
          {exerciseId: 13, exerciseName: 'Z Bar Curl', typeId: 2},
          {exerciseId: 14, exerciseName: 'Rear Squat', typeId: 3},
          {exerciseId: 15, exerciseName: 'Deadlift', typeId: 3},
          {exerciseId: 16, exerciseName: 'Leg Press', typeId: 3},
          {exerciseId: 17, exerciseName: 'Front Squat', typeId: 3},
          {exerciseId: 18, exerciseName: 'Hack Squat', typeId: 3},
      ]);
    });
};
