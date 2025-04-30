const prompt = require('prompt-sync')();

let peso = parseFloat(prompt("Peso (kg):"));
let altura = parseFloat(prompt("Altura (m):"));
let imc = peso / (altura ** 2);
if (imc < 18.5) console.log("Abaixo do peso");
else if (imc < 25) console.log("Peso normal");
else if (imc < 30) console.log("Sobrepeso");
else console.log("Obesidade");