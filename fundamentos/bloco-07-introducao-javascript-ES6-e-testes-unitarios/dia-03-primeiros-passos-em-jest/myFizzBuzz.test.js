const myFizzBuzz = require('./myFizzBuzz.js');

describe('testa funçao myFizzBuzz', () => {
    it('testa se retorna "fizzbuzz"', ()=> {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    })
    it('testa se retorna "fizz"', ()=> {
        expect(myFizzBuzz(3)).toBe('fizz');
    })
    it('testa se retorna "buzz"', ()=> {
        expect(myFizzBuzz(5)).toBe('buzz');
    })
    it('testa se retorna o numero caso nao for divisivel por 3 ou 5', ()=> {
        expect(myFizzBuzz(7)).toBe(7);
    })
    it('testa se retorna "false" caso passe uma string', ()=> {
        expect(myFizzBuzz('3')).toBe(false);
    })
});