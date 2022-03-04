const longestWord = frase => {
    let palavras = frase.split(' ');
    let tamanho = 0;
    let maiorPalavra = '';

    for (let index in palavras){
       if(palavras[index].length > tamanho ){
        tamanho = palavras[index].length;
        maiorPalavra = palavras[index];
    }
    }
    return maiorPalavra;
}

console.log(`A maior palavra encontrada foi : "${longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')}"`);