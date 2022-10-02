//IEEE 754-2008
let num1 = 1;
let num2 = 2.5009;

console.log(num1+num2);
// executa a conta

console.log(num1.toString+num2);
//converte para string temporareamente
//para alterar e so fazer num1 = num.toString

console.log(num1+num2.toFixed(4));
// converte para um numero com 2 casa decimais ou 4 caracteres 

console.log(Number.isInteger(num1));
//verifica se o numero é inteiro

console.log(Number.isNaN(num1));
//verifica se nao é um numero

//imprecisão

//resolvendo as imprecisoes 

num1 = Number(num1.toFixed(2));









