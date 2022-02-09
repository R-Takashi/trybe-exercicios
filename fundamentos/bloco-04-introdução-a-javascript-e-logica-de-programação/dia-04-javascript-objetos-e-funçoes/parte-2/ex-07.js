let word1 = 'trybe';
let word2 = 'be';

console.log(endString(word1, word2));

function endString(word , ending){
    let string1 = word.split('').reverse();
    let string2 = ending.split('').reverse();

    for(let index in string2){
        if(string2[index] === string1[index]){
            return true;
        }else{
            return false;
        }
    }
}