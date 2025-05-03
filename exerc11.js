// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require("prompt-sync")();

let numero;
let soma = 0;

for (let i = 0; i < 5; i++) {
  numero = Number(prompt("Informe um valor: "));
  soma += numero;
}
console.log("A soma dos números é: " + soma);
