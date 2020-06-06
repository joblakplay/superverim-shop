
exports.up = function(knex) {
    knex.schema.createTable('products', table =>{
        table.increments('id').primary()
        table.string('name',100).notNull()
        table.string('description',250).notNull()
        table.real('estoqueAtual')
        table.real('price').notNull()
        table.string('image',1500)
        table.integer('categoryId').references('id')
            .inTable('categories')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('products')
};
