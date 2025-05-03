// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números

const prompt = require("prompt-sync")();

let numero;
let soma = 0;
let media = 0;
let cont = 0;

do {
  numero = Number(prompt("Informe um número decimal: "));
  soma += numero;
  cont++;
} while (numero != 0);

media = soma / (cont - 1);
console.log(`A média dos números digitados é: ${media}`);
