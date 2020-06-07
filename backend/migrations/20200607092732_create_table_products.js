exports.up = function(knex, Promise) {
    return knex.schema.createTable('products', table =>{
        table.increments('id').primary()
        table.string('name',100).notNull()
        table.text('description',1000).notNull()
        table.float('estoqueAtual')
        table.decimal('price',8,2).notNull()
        table.string('image',1500).notNull()
        table.integer('categoryId').references('id')
            .inTable('categories').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('products')
};
