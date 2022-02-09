let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function nomeMaior (array){
let maiorNome = array[0];
for(let index in array){
    if(maiorNome.length < array[index].length){
        maiorNome = array[index];
    }
}
return maiorNome;
}

console.log('O maior nome é : ' + nomeMaior(array))