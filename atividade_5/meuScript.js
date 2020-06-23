let readlineSync = require('readline-sync');

let contacarac = readlineSync.question('Digite o texto e contaremos os caracteres ');

console.log('A sua escrita tem ' + contacarac.length + ' caracteres');