const sum = require('./sum.js');

describe('testa funçao sum', () => {
    it('testa retorno do resultado da soma', ()=> {
        expect(sum(4, 5)).toBe(9);
        expect(sum(0, 0)).toBe(0);
    })
    it('testa se retorna erro quando inserida string', ()=> {
        expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
    })
})