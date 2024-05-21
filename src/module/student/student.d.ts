export interface Student {
  nome: string
  idade: number
}

export interface StudentDB extends Student {
  id: number
}