// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require("prompt-sync")();

let numeroDeMacas = Number(prompt("Informe quantas maças foram compradas: "));

if (numeroDeMacas < 12) {
  console.log("O preço da maça é R$ 0,30.");
  console.log(
    "O valor total é R$ " + (numeroDeMacas * 0.3).toFixed(2).replace(".", ",")
  );
} else {
  console.log("O preço da maça é R$ 0,25.");
  console.log(
    "O valor total é R$ " + (numeroDeMacas * 0.25).toFixed(2).replace(".", ",")
  );
}
