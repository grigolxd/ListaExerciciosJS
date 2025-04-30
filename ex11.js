const prompt = require('prompt-sync')();

let soma = 0;
for (let i = 0; i < 5; i++) soma += parseInt(prompt("Digite um número:"));
console.log("Soma:", soma);