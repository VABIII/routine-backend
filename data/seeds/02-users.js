
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {userName: 'VABIII', fullName: 'Vernon Bengtson',
            email: 'tbengtson82@gmail.com', role: 'admin', password: '1234'},
          {userName: 'Vern82', fullName: 'Trey Bengtson',
              email: 'plybyvern6@aol.com', role: 'user', password: '1234'},
          {userName: 'Al', fullName: 'Alfred Bengtson',
              email: 'tbengtson82@outlook.com', role: 'user', password: '1234'},
      ]);
    });
};
