function encode(phrase) {
    // Método .replace visto no MDN
    let encodedPhrase = phrase.replace(/a/g, '1');
    encodedPhrase = encodedPhrase.replace(/e/g, '2');
    encodedPhrase = encodedPhrase.replace(/i/g, '3');
    encodedPhrase = encodedPhrase.replace(/o/g, '4');
    encodedPhrase = encodedPhrase.replace(/u/g, '5');
    return encodedPhrase;
  }
  function decode(phrase) {
    let decodedPhrase = phrase.replace(/1/g, 'a');
    decodedPhrase = decodedPhrase.replace(/2/g, 'e');
    decodedPhrase = decodedPhrase.replace(/3/g, 'i');
    decodedPhrase = decodedPhrase.replace(/4/g, 'o');
    decodedPhrase = decodedPhrase.replace(/5/g, 'u');
    return decodedPhrase;
  }

  module.exports = {encode, decode};
  