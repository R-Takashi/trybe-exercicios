// Exercicio 9 - A fim de evitar que futuros treinadores sejam prejudicados, 
// o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. 
// Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações.


// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./ex08');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (feito) => {
    // Escreva aqui seu código
    const mensagemErro = new Error('Não temos esse pokémon para você :(');
    function testaErro(erro, resultado) {
        expect(erro).toEqual(mensagemErro);
        feito();
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', testaErro);
  });

  it('retorna um pokemon que existe no banco de dados', (feito) => {
    // Escreva aqui seu código
    const mensagemPokemon = 'Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun';

    function testaPokemon(erro, resultado) {
        expect(resultado).toBe(mensagemPokemon);
        feito();
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Squirtle', testaPokemon);
  });
});