const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
const toObject = ([carro, marca, ano]) => (
    carroInfo = {
        carro,
        marca,
        ano,
    }
);

console.log(toObject(palio));
console.log(toObject(shelbyCobra));
console.log(toObject(chiron));