const prompt = require('prompt-sync')();

let A = parseInt(prompt("Lado A:"));
let B = parseInt(prompt("Lado B:"));
let C = parseInt(prompt("Lado C:"));
if (A < B + C && B < A + C && C < A + B) {
  if (A === B && B === C) console.log("Equilátero");
  else if (A === B || A === C || B === C) console.log("Isósceles");
  else console.log("Escaleno");
} else console.log("Não forma triângulo");