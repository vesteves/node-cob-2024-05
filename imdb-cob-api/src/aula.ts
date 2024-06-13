export const somar = (a: number, b: number) => {
  console.log(`Os números que serão somados são: ${a} e ${b}`);
  return a + b;
};

export const subtrair = (a: number, b: number) => {
  return a - b;
};

export const calc = (a: number, b: number) => {
  let soma = somar(a, b);
  soma = soma + 10;
  const result = subtrair(soma, a);
  return result;
};

const apagarUsuario = (id: number) => {
  // vai até a base de dados e busco o ID
  // se encontrar o ID, remove ele da base
  // return uma mensagem 'O ID tal foi removido'
};

export default {
  somar,
  subtrair,
  calc,
};
