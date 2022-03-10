const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verificaProva = (gabarito, prova) => {
    let contador = 0;
    for (let index in gabarito){
        if (gabarito[index] === prova[index]) {
            contador += 1;
        } else if (gabarito[index] !== prova[index] && prova[index] !== 'N.A'){
            contador -= 0.5;
        }
    }
    return contador;
};

const notaFinal = (gabarito, prova, geraNota) => {
    const nota = geraNota(gabarito, prova);
    return nota;
}

console.log(`A nota final é: ${notaFinal(RIGHT_ANSWERS, STUDENT_ANSWERS, verificaProva)}`);