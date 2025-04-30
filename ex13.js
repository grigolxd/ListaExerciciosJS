const prompt = require('prompt-sync')();
let soma = 0, cont = 0, n;
do {
  n = parseFloat(prompt("Digite um número (0 para parar):"));
  if (n !== 0) { soma += n; cont++; }
} while (n !== 0);
console.log("Média:", (soma / cont).toFixed(2));