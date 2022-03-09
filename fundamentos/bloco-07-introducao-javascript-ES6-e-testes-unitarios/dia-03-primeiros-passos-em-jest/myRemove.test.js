const myRemove = require('./myRemove.js');

describe('testa funçao myRemove', () => {
    it('testa se remove o elemento esperado na array', ()=> {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
});
