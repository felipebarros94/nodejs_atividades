let readlineSync = require('readline-sync');

let dia = readlineSync.question('Informe o dia do seu aniversário ');
let mes = readlineSync.question('Informe o mês do seu aniversário ');

dia = Number(dia);
mes = Number(mes);

if(dia >= 20 && mes == 01 || dia <= 18 && mes == 02) {
    console.log('Seu signo é de Aquário');
}
if(dia >= 19 && mes == 02 || dia <= 20 && mes == 03) {
    console.log('Seu signo é de Peixes');
}
if(dia >= 21 && mes == 03 || dia <= 19 && mes == 04) {
    console.log('Seu signo é de Áries');
}
if(dia >= 20 && mes == 04 || dia <= 20 && mes == 05) {
    console.log('Seu signo é de Touro');
}
if(dia >= 21 && mes == 05 || dia <= 20 && mes == 06) {
    console.log('Seu signo é de Gêmeos');
}
if(dia >= 21 && mes == 06 || dia <= 22 && mes == 07) {
    console.log('Seu signo é de Câncer');
}
if(dia >= 23 && mes == 07 || dia <= 22 && mes == 08) {
    console.log('Seu signo é de Leão');
}
if(dia >= 23 && mes == 08 || dia <= 22 && mes == 09) {
    console.log('Seu signo é de Virgem');
}
if(dia >= 23 && mes == 09 || dia <= 22 && mes == 10) {
    console.log('Seu signo é de Libra');
}
if(dia >= 23 && mes == 10 || dia <= 21 && mes == 11) {
    console.log('Seu signo é de Escorpião');
}
if(dia >= 22 && mes == 11 || dia <= 21 && mes == 12) {
    console.log('Seu signo é de Sagitário');
}
if(dia >= 22 && mes == 12 || dia <= 19 && mes == 01) {
    console.log('Seu signo é de Capricónio');
}
return;