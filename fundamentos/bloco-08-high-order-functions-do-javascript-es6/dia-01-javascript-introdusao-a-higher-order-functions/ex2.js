const resultadoSorteio = (numero, numeroSorteado) => {
    const gerarNumeroSortedo = Math.floor((Math.random() * 5) +1);
    
    return numeroSorteado(numero, gerarNumeroSortedo) ? 'Parabéns, você ganhou!' : 'Tente Novamente';
};

const checarSorteio = (numeroJogo, numeroSorteio) => numeroJogo === numeroSorteio;

console.log(resultadoSorteio(2, checarSorteio));