const nome = prompt('Digite seu nome completo:');
console.log(nome);
letra = nome.charAt(1)
//document.write('');
//document.body.innerHTML = para eescrever no html
document.body.innerHTML = `o seu nome é: ${nome} <br>`
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)} <br />`;
document.body.innerHTML += `Qual o primeiro índice da letra ${nome} no seu nome? ${nome.indexOf(letra)}<br />`;
document.body.innerHTML += `Qual o último índice da letra ${nome} no seu nome? ${nome.lastIndexOf(letra)}<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)}<br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLocaleLowerCase()} <br />`;