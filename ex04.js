const prompt = require('prompt-sync')();

let opcao = prompt("Escolha uma opção: 1-Somar, 2-Subtrair, 3-Sair");
switch(opcao) {
  case "1": console.log("Você escolheu somar"); break;
  case "2": console.log("Você escolheu subtrair"); break;
  case "3": console.log("Saindo..."); break;
  default: console.log("Opção inválida");
}