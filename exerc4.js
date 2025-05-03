// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada

const prompt = require("prompt-sync")();

let opcao = Number(
  prompt("Escolha uma bebida: (1 - Café, 2 - Refrigerante, 3 - Suco): ")
);

switch (opcao) {
  case 1:
    console.log("Café selecionado...");
    break;
  case 2:
    console.log("Refrigerante selecionado...");
    break;
  case 3:
    console.log("Suco selecionado...");
    break;
  default:
    console.log("Opção invalida!");
}
