const prompt = require('prompt-sync')();

let qtd = parseInt(prompt("Quantidade de maçãs:"));
let preco = qtd < 12 ? 0.30 : 0.25;
console.log(`Total: R$ ${(qtd * preco).toFixed(2)}`);