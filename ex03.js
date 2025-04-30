const prompt = require('prompt-sync')();

let nota = parseFloat(prompt("Digite a nota (0-10):"));
if (nota >= 7) console.log("Aprovado");
else if (nota >= 5) console.log("Recuperação");
else console.log("Reprovado");