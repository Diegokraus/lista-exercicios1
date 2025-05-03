// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while

const prompt = require("prompt-sync")();

let fatorial = 1;

numero = Number(prompt("Digite um número: "));
for (let i = 2; i <= numero; i++) {
  fatorial *= i;
}

console.log(`O fatorial de ${numero} é ${fatorial}`);
