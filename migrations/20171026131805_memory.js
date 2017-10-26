
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('memory', function(table){
    table.increments();
    table.string('memoryData');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('memory')
  ]);
};
