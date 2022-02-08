let numerosPrimos = [];
let maiorNumero = 0;

for( let index = 0 ; index <= 50 ; index += 1 ){
    let divisoes = 0;
    for( let index2 = 1 ; index2 <= index ; index2 += 1){
        if(index % index2 == 0 ){
            divisoes += 1 ;
        }
    }
    if (divisoes == 2){
        numerosPrimos.push(index);   
    }
}

for(let index = 0 ; index < numerosPrimos.length ; index += 1){
    if(maiorNumero < numerosPrimos[index]){
        maiorNumero = numerosPrimos[index];
    }
}

console.log(maiorNumero);