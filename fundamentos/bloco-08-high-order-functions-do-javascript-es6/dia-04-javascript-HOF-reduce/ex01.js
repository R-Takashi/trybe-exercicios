const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    const array = arrays.reduce((acumulador, elemento) => acumulador.concat(elemento), []);
    return array;
  };

  console.log(flatten());
