const uppercase = require('./ex07.js');


const { expect } = require("@jest/globals")
const { strict } = require("yargs")

test ('transforma string (maiusculo) para (MAIUSCULO)', (feito) => {
    uppercase('maiusculo', string => {
        try {
            expect(string).toBe('MAIUSCULO');
            feito();
        } catch (erro) {
            feito(erro);
        }
    }
    );
} );