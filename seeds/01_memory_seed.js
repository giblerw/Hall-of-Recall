
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('memory').del()
    .then(function () {
      // Inserts seed entries
      return knex('memory').insert([
        {id: 1, memoryData: 'to create a new seed >knex seed:make SEED_NAME'},
        {id: 2, memoryData: 'to create a new migration >knex migrate:make TABLE_NAME'},
        {id: 3, memoryData: 'to create a new ...'}
      ]);
    });
};
