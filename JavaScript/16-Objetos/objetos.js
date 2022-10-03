/*const array =[1,2,3];
array.push(4);
console.log(array);
//---------------objeto----------------//
/*const nome01 = 'luis';
const sobrenome01 = 'Augusto';
const idade01 = 25;

const nome02 = 'luis';
const sobrenome02 = 'Augusto';
const idade02 = 21;
*/
/*const pessoa1={
    nome: 'luis',
    sobrenome:'Auguto',
    idade:21
};
console.log(pessoa1.nome)

// unindo com uma função

function criaPessoa (nome, sobrenome,idade){
    return{
        nome,sobrenome,idade
    };
}

const pessoa2 = criaPessoa('luis', 'Augusto', 25);

console.log(pessoa2.nome);*/
//-----------------------------------------------------------\\
const pessoa1 = {
    nome:'luis',
    sobrenome:'augusto',
    idade: 25,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} esta falando oi ${this.idade}`)
    },
    incrementaIdade(){
        ++this.idade;
    }
}
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
//ara referenciar ${this}