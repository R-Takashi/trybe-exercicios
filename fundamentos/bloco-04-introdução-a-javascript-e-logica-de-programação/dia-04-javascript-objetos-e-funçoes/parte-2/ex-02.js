let array = [2, 3, 6, 7, 10, 1];

function indiceMaior (array){
let highestIndex = 0;
for(let index in array){
    if(array[highestIndex] < array[index]){
        highestIndex = index;
    }
}
return highestIndex;
}
console.log('O maior indice é : ' + indiceMaior(array));