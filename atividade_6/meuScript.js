let readlineSync = require('readline-sync');
let user1 = readlineSync.question('Me informe seu nome: ');
let carac = readlineSync.question('digite o maximo de carecteres em 1 minuto! ');
console.log('A sua escrita tem ' + carac.length + ' caracteres');

let user2 = readlineSync.question('Me informe seu nome: ');
let carac2 = readlineSync.question('digite o maximo de carecteres em 1 minuto! ');
console.log('A sua escrita tem ' + carac2.length + ' caracteres');

carac = String(carac);
carac2 = String(carac2);

if(carac > carac2) {
    console.log('O(a) ' + user1 + ' digitou mais caracteres.');
} else if (carac == carac2) {
    console.log('Os dois digitaram a mesma quantidade de caracteres.');
} 
else {
    console.log('O(a) ' + user2 + ' digitou mais caracteres.');
}
