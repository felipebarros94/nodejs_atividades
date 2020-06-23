let readlineSync = require('readline-sync');

console.log('Vamos calcular a área do seu terreno?');
let area1 = readlineSync.question('Qual o comprimento do seu terreno? ');
let area2 = readlineSync.question('Qual a largura do seu terreno? ');

area1 = Number(area1);
area2 = Number(area2);

console.log('A area do seu terreno é de ' + area1 * area2 ) 

