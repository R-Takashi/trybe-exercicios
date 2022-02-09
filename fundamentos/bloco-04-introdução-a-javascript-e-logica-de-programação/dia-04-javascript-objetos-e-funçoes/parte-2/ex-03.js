let array = [2, 4, 6, 7, 10, 0, -3];

function indiceMenor (array){
let lowerIndex = 0;
for(let index in array){
    if(array[lowerIndex] > array[index]){
        lowerIndex = index;
    }
}
return lowerIndex;
}
console.log('O menor indice é : ' + indiceMenor(array));