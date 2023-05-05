function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;

    if (numero === 000) {
        document.body.innerHTML = `
        <h2>GAME OVER!!!</h2>
        <h3>Pressione o botão para jogar novamente</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
        document.body.style.backgroundColor = "black";
        document.body.style.backgroundImage = "none";
    }
    
    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML = '<div>Valor inválido!</div>';
        return;
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML = `
        <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}<\div>
        `;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Parabéns!</h2>
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <h3>Quantidade de chutes: ${contador + 1}</h3>
            <h3>E aí, se garante vencedor contra qualquer um? Desafie todos ao seu redor e prove que merece esse título!<\h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML = `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
        input.placeholder = "Tente novamente!";
    } else {
        elementoChute.innerHTML = `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
        input.placeholder = "Tente novamente!";
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', (e) => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})
