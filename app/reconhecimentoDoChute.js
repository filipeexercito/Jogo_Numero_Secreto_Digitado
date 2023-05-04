const elementoChute = document.getElementById('chutes');
const input = document.getElementById('chute');

addEventListener('submit', (e) => {
    e.preventDefault();

    const valor = e.target.elements['chute'];
    const chute = valor.value;
    
    verificaSeOChutePossuiUmValorValido(chute);

    valor.value = "";
})





