export function up(knex) {
    return knex.schema.createTable('flavors', (table) => {
      table.increments('id').primary()
      table.string('color')
      table.string('name')
      table.decimal('price')
    })
  }
  
  export function down(knex) {
    return knex.schema.dropTableIfExists('flavors')
  }