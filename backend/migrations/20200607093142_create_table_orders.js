exports.up = function(knex, Promise) {
    return knex.schema.createTable('orders', table =>{
         table.increments('id').primary()
         table.integer('clientId').references('id')
             .inTable('clients').notNull()
         table.integer('productId').references('id')
             .inTable('products').notNull()
         table.float('quantity').notNull()
         table.date('dataOrders').notNull()
         table.integer('statusId').references('id')
             .inTable('statusOrder').notNull()
     })
 };
 
 exports.down = function(knex, Promise) {
     return knex.schema.dropTable('orders')
 };
 