const {encode, decode} = require('./encodeDecode.js');

describe('testa funçao encodeDecode', () => {
    it('testa se retorna "encode" e "decode" são funções', ()=> {
        expect(typeof encode).toBe('function');
        expect(typeof decode).toBe('function');
    })
    it('testa se a função encode converte as vogais a, e, i, o, u em 1, 2, 3, 4 e 5, respectivamente', ()=> {
        expect(encode('ana')).toEqual('1n1');
        expect(encode('ele')).toEqual('2l2');
        expect(encode('ixi')).toEqual('3x3');
        expect(encode('ovo')).toEqual('4v4');
        expect(encode('uwu')).toEqual('5w5');
        expect(encode('aeiou')).toEqual('12345');
    })
    it('testa se a função decode converte os numeros 1, 2, 3, 4 e 5 em a, e, i, o, u, respectivamente', ()=> {
        expect(decode('1n1')).toEqual('ana');
        expect(decode('2l2')).toEqual('ele');
        expect(decode('3x3')).toEqual('ixi');
        expect(decode('4v4')).toEqual('ovo');
        expect(decode('5w5')).toEqual('uwu');
        expect(decode('12345')).toEqual('aeiou');
    })
    it('testa se string passada para a função tem o mesmo tamanho da string retornada', ()=> {
        expect(encode('ana').length).toEqual(3);
        expect(decode('1n1').length).toEqual(3);
    })
});