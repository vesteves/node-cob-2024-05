import Pessoa from "./pessoa.class"

export class Atleta extends Pessoa {
  private _modalidade: string

  constructor(nome: string, idade: number, modalidade: string) {
    super(nome, idade)
    this._modalidade = modalidade
  }

  apresentar() {
    return `${super.apresentar()} Minha modalidade é ${this._modalidade}.`
  }
}

export default Atleta