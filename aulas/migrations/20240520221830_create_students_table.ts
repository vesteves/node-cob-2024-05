import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('students', (table) => {
    table.bigIncrements('id')
    table.string('nome')
    table.integer('idade')
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('students')
}

