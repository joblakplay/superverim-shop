
exports.up = function(knex) {
  return knex.schema.table('products', function(table) {
         table.string('codigoBar',13).notNull().unique()
  })
};

exports.down = function(knex) {
    return knex.schema.table('products',function(table){
        table.dropColumn('codigoBar')
    })
};
