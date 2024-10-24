function sortear() {
    let quantidade = parseFloat(document.getElementById('quantidade').value);
    let de = parseFloat(document.getElementById('de').value);
    let ate = parseFloat(document.getElementById('ate').value);
    let tamanhoIntervalo = ate - de + 1;

    if (quantidade > tamanhoIntervalo) {
        alert("Quantidade de números solicitada é maior do que o intervalo disponível. Por favor, ajuste os valores.");
        return;
    }

    let sorteados = [];

    for (let i = 0; i < quantidade; i++) {
        let numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto_paragrafo">Números sorteados: ${sorteados}</label>`;
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto_paragrafo">Números sorteados: nenhum até agora</label>`;
}