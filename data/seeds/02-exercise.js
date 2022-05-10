
exports.seed = function(knex) {
  return knex('exercise').truncate()
    .then(function () {
      return knex('exercise').insert([
        {name: 'Bench Press'},
        {name: 'Incline Bench'},
        {name: 'Barbell Military Press'},
        {name: 'Single Hand Pull Down'},
        {name: 'Single Hand Cable Row'},
        {name: 'Close Grip Bicep Pull Down'},
        {name: 'Cable Cross Pull'},
        {name: 'Front Cable Extension'},
        {name: 'Side Cable Extension'},
        {name: 'Barbell Curl'},
        {name: 'Smilies'},
        {name: 'Low Cable Fly'},
        {name: 'Barbell Chest Fly'},
        {name: 'Reverse Barbell Fly'},
        {name: 'Bent Over Row'},
        {name: 'Seated Cable Row'},
        {name: 'Squats'},
        {name: 'Deadlift'},
      ]);
    });
};
