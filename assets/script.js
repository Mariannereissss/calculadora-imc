const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const botao = document.getElementById('btn');
const botaores = document.getElementById('res');
const div = document.getElementById('resultados');


function calcularIMC() {

    const valorAltura = parseFloat(altura.value);
    const valorPeso = parseFloat(peso.value); 

    if((isNaN(valorAltura)) || (isNaN(valorPeso))) {
        alert('Digite um número válido');
    }

    let imc = 0;

    imc = valorPeso / (valorAltura * valorAltura);

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');

    if(imc <= 18.5) {
        div.appendChild(p1);
        div.appendChild(p2);
        p1.textContent = `Seu IMC é: ${imc}`;
        p2.textContent = 'Cuidado!';
        p2.style.color = 'red';
    }else if((imc >= 18.6) && (imc <= 24.9)) {
        div.appendChild(p1);
        div.appendChild(p2);
        p1.textContent = `Seu IMC é: ${imc}`;
        p2.textContent = 'Parabéns!';
        p2.style.color = 'green';
    }else if((imc >= 25) && (imc <= 29.9)) {
        div.appendChild(p1);
        div.appendChild(p2);
        p1.textContent = `Seu IMC é: ${imc}`;
        p2.textContent = 'Atenção!';
        p2.style.color = 'orange';
    }else if((imc >= 30) && (imc <= 34.90)) {
        div.appendChild(p1);
        div.appendChild(p2);
        p1.textContent = `Seu IMC é: ${imc}`;
        p2.textContent = 'Atenção!';
        p2.style.color = 'red';
    }else if((imc >= 35) && (imc <= 39.9)) {
        div.appendChild(p1);
        div.appendChild(p2);
        p1.textContent = `Seu IMC é: ${imc}`;
        p2.textContent = 'Atenção!';
        p2.style.color = 'red';
    }else {
        div.appendChild(p1);
        div.appendChild(p2);
        p1.textContent = `Seu IMC é: ${imc}`;
        p2.textContent = 'Atenção total!';
        p2.style.color = 'red';
    }};

    function resetar() {
        div.textContent = ''
    }

    botao.addEventListener('click', calcularIMC);
    botaores.addEventListener('click', resetar);