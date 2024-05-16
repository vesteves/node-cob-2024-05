export class Pessoa {
  private _nome: string
  private _idade: number

  constructor(nome: string, idade: number) {
    this._nome = nome
    this._idade = idade
  }

  get nome() {
    return this._nome
  }

  set nome(nome: string) {
    this._nome = nome
  }

  apresentar() {
    return `Olá! Meu nome é ${this._nome} e minha idade é ${this._idade} anos.`
  }
}

export default Pessoa