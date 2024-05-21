import knex from 'knex'
import { conn } from '../config/database/knex'

let dbConn: any;

const knexConn = () => {
  if (!dbConn) {
    dbConn = knex(conn)
  }

  return dbConn
}

export default knexConn()