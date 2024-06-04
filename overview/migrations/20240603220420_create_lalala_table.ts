import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('lalala', (table) => {
        table.bigIncrements('id');
        table.string('name');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('lalala');
}

