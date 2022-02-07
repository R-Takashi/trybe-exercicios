let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0] ;
let menorPalavra = array[0] ;

for(let i = 0 ; i < array.length ; i += 1){
    if (maiorPalavra.length < array[i].length){
        maiorPalavra = array[i];
    }
}
console.log('Maior palavra : ' + maiorPalavra);


for(let i = 0 ; i < array.length ; i += 1){
    if (menorPalavra.length > array[i].length){
        menorPalavra = array[i];
    }
}
console.log('Menor palavra : ' + menorPalavra);