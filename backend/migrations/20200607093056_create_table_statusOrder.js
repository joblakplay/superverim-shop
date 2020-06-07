exports.up = function(knex, Promise) {
    return knex.schema.createTable('statusOrder', table =>{
        table.increments('id').primary()
        table.string('name',100).notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('statusOrder')
};
