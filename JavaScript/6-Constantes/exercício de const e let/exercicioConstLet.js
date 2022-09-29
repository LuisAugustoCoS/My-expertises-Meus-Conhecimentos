/*
Luis Augusto Sousa tem 21 anos, pesa 62 kg
tem 1.75 de altura e seu IMC é de 20,24
Luis Augusto nasceu em 2000
 */
const nome = 'Luis Augusto';
const sobrenome = 'Sousa';
const idade = 22;
const peso = 62;
const alturaEmM = 1.84;
let indiceMassaCorporal;
let anoNascimento;
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
console.log(indiceMassaCorporal)
anoNascimento = 2022-idade;
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem', alturaEmM, 'de altura e seu IMC é de ', indiceMassaCorporal);
console.log(nome, 'nasceu em',anoNascimento);

// tamplate strings
console.log(`tem ${alturaEmM} de altura e seu IMC é de  ${indiceMassaCorporal}`);