const prompt = require('prompt-sync')();

let a = parseInt(prompt("Primeiro número:"));
let b = parseInt(prompt("Segundo número:"));
console.log(a < b ? `${a}, ${b}` : `${b}, ${a}`);