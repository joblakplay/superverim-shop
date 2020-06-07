exports.up = function(knex, Promise) {
    return knex.schema.createTable('clients', table =>{
        table.increments('id').primary()
        table.string('name',100).notNull()
        table.string('email',250).notNull().unique()
        table.string('password',50).notNull()
        table.string('adress',100).notNull()
        table.string('bairro',50).notNull()
        table.string('reference',50)
        table.string('CPF',11).notNull().unique()  
        table.string('tel',11).notNull().unique()  
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('clients')
};