const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    const a = names.reduce((acc, nome) => 
        acc + nome.split('').reduce((contaA, letra) => {
            if (letra === 'a' || letra === 'A') return contaA + 1;
            return contaA;
        }, 0)
    , 0);
    return a;
  };

  console.log(containsA());