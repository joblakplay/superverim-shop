
exports.up = function(knex) {
    knex.schema.createTable('orders', table =>{
        table.increments('id').primary()
        table.integer('clientId').references('id')
            .inTable('clients')
        table.integer('productId').references('id')
            .inTable('products')
        table.real('qauntity').notNull()
        table.Date('dataOrders').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('orders')
};
