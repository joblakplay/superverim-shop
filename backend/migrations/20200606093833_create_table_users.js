
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table =>{
        table.increments('id').primary()
        table.string('name',100).notNull()
        table.string('email',100).notNull()
        table.string('password',50).notNull()
        table.boolean('admin').notNull().defaultTo(false)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};
