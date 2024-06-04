import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'aula07-db',
      user: 'postgres',
      password: 'password',
    },
  },
};

module.exports = config;
