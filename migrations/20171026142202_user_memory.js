
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('user_memory', function(table){
    table.increments();
    table.integer('memory_id');
    table.integer('user_id');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('user_memory')
  ]);
};
