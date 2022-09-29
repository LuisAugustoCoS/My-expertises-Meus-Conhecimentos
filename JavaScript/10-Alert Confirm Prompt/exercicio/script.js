//Fazer um programa que pegur o valor digitado em string transforme em number e retorne a soma
//foi utilizado o number , porem poderia ser utilizado o parseFloat ou parseInt.
//window - não é nescessario para executar esses metodos 
const num1 = Number(window.prompt('Digite um numero'));
const num2 = Number(window.prompt('Digite outro numero'));
const soma = num1 + num2;
const sub = num1 - num2;
const div = num1 / num2;
const mult = num1 * num2;
window.alert(`O resultado da Soma é ${soma}"\n" O da Subtração ${sub}"\n" O da Divisão é ${div}"\n" E a Multiplicação ${mult}.`);