let word = 'subi no onibus';
let reverse =  '' ;

for (let i = 0 ; i < word.length ; i += 1){
    reverse += word[word.length -1 -i];
}
console.log(reverse);