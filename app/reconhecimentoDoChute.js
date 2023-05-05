const elementoChute = document.getElementById('chutes');
const input = document.getElementById('chute');
const tentativas = document.getElementById('contador');
let contador = 0;

addEventListener('submit', (e) => {
    e.preventDefault();

    const valor = e.target.elements['chute'];
    const chute = valor.value;
    
    verificaSeOChutePossuiUmValorValido(chute);

    valor.value = "";
    contador++;
    modificaContadorDeTentativas(contador);
})

function modificaContadorDeTentativas(e) {
    return tentativas.innerHTML = e;
}





