// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário
// (de 1 a 10) utilizando um loop for

const prompt = require("prompt-sync")();

let numero = Number(prompt("Informe um valor: "));

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} X ${i} = ${numero * i}`);
}
