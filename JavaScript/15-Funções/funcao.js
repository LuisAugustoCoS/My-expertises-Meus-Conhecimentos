function saudacao(nome){
return `BOM DIA ${nome}`;
}

saudacao('LUIS');
saudacao('MARIA');
//----------------------------------------\\
const variavel = saudacao('luis')
console.log(variavel);

//----------------------------------------\\

function soma (x /*parmetro*/ , y = 1){
    const resultado = x + y;
    return resultado;
}
console.log(soma(2, 2));

//função dentro de variável , função anonyma

//const raiz = function(n){
   // return n**0.5;
//};

//arrow function
const raiz = (n)=> n ** 0.5;
console.log(raiz(3));
 