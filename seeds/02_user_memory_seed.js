
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_memory').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_memory').insert([
        {id: 1, memory_id: "3", user_id: "2"},
        {id: 2, memory_id: "1", user_id: "3"},
        {id: 3, memory_id: "2", user_id: "3"}
      ]);
    });
};
