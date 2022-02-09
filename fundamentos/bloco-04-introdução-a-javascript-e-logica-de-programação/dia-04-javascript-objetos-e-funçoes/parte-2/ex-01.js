function verificaPalindromo(word){
    let reverseWord = word.split('').reverse().join('');
    if(reverseWord === word){
        return true;
    }else{
        return false;
    }
}
console.log(verificaPalindromo('arara'));
console.log(verificaPalindromo('desenvolvimento'));