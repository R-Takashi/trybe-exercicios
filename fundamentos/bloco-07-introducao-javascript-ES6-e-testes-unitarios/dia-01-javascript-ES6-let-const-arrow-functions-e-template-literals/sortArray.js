const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArray = array => {
    const sortedArray = array.sort((a, b) => a - b);
    return sortedArray;
}

console.log(`Os números ${sortArray(oddsAndEvens)} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉