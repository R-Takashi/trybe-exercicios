let n = 5;

console.log('A soma dos numeros dentro de ' + n + ' é : ' + somaNumero(n));

function somaNumero (number){
    let soma = 0;
    for( let index = 1 ; index <= number ; index += 1 ){
        soma = soma + index;
    }
    return soma;
}