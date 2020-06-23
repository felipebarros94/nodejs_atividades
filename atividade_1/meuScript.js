let readlineSync = require('readline-sync');

let numBilhete = readlineSync.question('Bem vindo ao teatro soled, poderia me informar a ordem da compra? ');
let numCadeira = readlineSync.question('Muito obrigado, poderia agora me informar em qual fileira gostaria de sentar? (A, B, C, D ou F?) ');
console.log('Sua ordem é ' + numBilhete + ' e seu assento fica localizado na fileira ' + numCadeira + ', tenha uma peça!');