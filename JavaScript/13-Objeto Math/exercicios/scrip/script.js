const numero = Number(prompt('Digite um numero'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = `<p>seu numero é: <strong>${numero}</strong></p>
<p>${numero} é interiro: <strong>${Number.isInteger(numero)}</strong></p>
<p>${numero} é NaN:<strong>${Number.isNaN(numero)}</strong></p>
<p>Arredondando para baixo: <strong>${Math.floor(numero)}</strong></p>
<p>Arredondando para baixo: <strong>${Math.ceil(numero)}</strong></p>
<p>Com duas casas decimais  <strong>${numero.toFixed(2)}</strong></p>`;

texto.innerHTML += `<p>seu numero é: <strong>${numero}</strong></p>;