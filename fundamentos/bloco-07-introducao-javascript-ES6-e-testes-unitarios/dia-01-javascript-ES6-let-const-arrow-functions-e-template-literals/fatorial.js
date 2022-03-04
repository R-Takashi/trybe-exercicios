const fatora = fatorial => {
    let resultado = 1;
    for(let index = fatorial ; index > 1; index -= 1){
        resultado *= index;
    }
    return resultado;
}

const numero = 4;

console.log(`O fatorial de ${numero} é ${fatora(numero)}`);