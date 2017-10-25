
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Weston', username: 'giblerw', password: 'password0', email: 'giblerw@colorado.edu'},
        {id: 2, name: 'Shayla', username: 'shayla303', password: 'password1', email: 'dopeshit@yahoo.com'},
        {id: 3, name: 'Clark', username: 'cmonster', password: 'password2', email: 'theBoss@yahoo.com'}
      ]);
    });
};
