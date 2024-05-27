import type { Knex } from "knex";
import { conn } from './src/config/database/knex'

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: conn,
};

module.exports = config;
