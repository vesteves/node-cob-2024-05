import knex from '../../service/knex'
import type { Student, StudentDB } from './student.d'

export const getAll = async (): Promise<StudentDB[] | []> => {
  const result = await knex('students').select()
  return result
}

export const store = async ({
  nome,
  idade
}: Student) => {
  const result = await knex('students').insert({
    nome,
    idade
  })
  return result
}