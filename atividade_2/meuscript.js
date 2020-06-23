let readlineSync = require('readline-sync');

console.log('Bem vindo ao check-list de higienização contra covid-19 ');

let lavmao = readlineSync.question('Sempre que toca em algum objeto de fora da sua quarentena, você lava as mãos ou passa alcool em gel? (Sim ou Não) ');

let Alcoolingel = readlineSync.question('Você está usando o alcool em gel, 70%?  (Sim ou Não) ');

let sim = String('Sim');
let nao = String('Não');

if(lavmao == sim && Alcoolingel == sim) {
    console.log('Meus parabéns, você esta se protejendo e aos outros a sua volta!');
} else if (lavmao == nao && Alcoolingel == nao || lavmao == nao && Alcoolingel == sim || lavmao == sim && Alcoolingel == nao ) {
    console.log('Você está correndo perigo e colocando outras pessoas em sua volta!')
}
else {
    console.log('Você está utilizando o alcool em gel de maneira errada, o correto seria o 70%')
}