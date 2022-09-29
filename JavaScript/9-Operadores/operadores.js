/*Aritiméticos 
+ faz adição e a concatenação dependendo do dado
- subitração
/ divisão
* multiplicação
** potenciação
% resto da divisão ou mod
*/

//soma
const num1 = 5;
const num2 = 10;
console.log(num1 + num2);
//concatenação
const num = 5;
const caractere = '10';
console.log(num + caractere);
//subitração
console.log(num1 - num2);
//divisão
console.log(num1 / num2);
//multiplicação
console.log(num1 * num2);
//potenciação
console.log(num1 ** num2);
//mod-->resto
console.log(num1 % num2);

//precedencia de operadores  para mudar as precedencias usar (parenteses)
//orden de precedencia (), **, *, /, %, +, - 
//operador de encremento ++ e decremento -- soma de 1 em 1 subritae de 1 em 1

let contador = 1;
contador++;
contador++;
console.log(contador);

//pode ser pós e pré-fixado

//incremento
++contador
contador++
//decremento
--contador
contador--
//encremento de mais de um valor 
const passo = 2;
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
//OU ---- operadores de atribuição
contador += passo;
console.log(contador);
contador += passo;
console.log(contador);
//pode ser com qualquer operador aritimético
contador -= passo;
console.log(contador);
contador *= passo;
console.log(contador);
contador /= passo;
console.log(contador);
contador **= passo;
console.log(contador);
//-----------------------------------------------
//NaN ==  Not a Number 
//converter string para number 
//parseInt(''); converte a string para o numero inteiro
//parseFloat(''); conversão de uma string para um numero com casas decimais
//Number(''); entende se é inteiro ou flutuante ou NaN
const num = Number('');
