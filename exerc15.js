// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

const prompt = require("prompt-sync")();

let n = Number(prompt("Informe um número: "));
let a = 0;
let b = 1;
let proximo;

console.log("Sequência de Fibonacci:");
for (let i = 0; i < n; i++) {
  console.log(a);
  proximo = a + b;
  a = b;
  b = proximo;
}
