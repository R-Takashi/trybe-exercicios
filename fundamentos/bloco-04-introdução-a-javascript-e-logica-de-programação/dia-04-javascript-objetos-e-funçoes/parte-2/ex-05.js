let array = [2, 3, 2, 5, 8, 2, 3];

function repetidos (array){
    let repeatCompare = 0;
    let count = 0;
    let numberRepeat = 0;
    let repeat = 0;

    for(let index in array){
        count = array[index];
        for(let index2 in array){
            if(count == array[index2]){
                repeat += 1;
            }
        }
        if(repeatCompare < repeat){
            repeatCompare = repeat;
            numberRepeat = array[index];
        }
        repeat = 0;
    }
    ;
    return numberRepeat;
};

console.log('o numero que mais repete é : ' + repetidos(array));