// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require("prompt-sync")();

let numero1 = Number(prompt("Informe um valor: "));
let numero2 = Number(prompt("Informe outro valor: "));

if (numero1 === numero2) {
  console.log("Os números são iguais.");
} else {
  if (numero1 > numero2) {
    console.log(`Ordem crescente: ${numero2}, ${numero1}`);
  } else {
    console.log(`Ordem crescente: ${numero1}, ${numero2}`);
  }
}
