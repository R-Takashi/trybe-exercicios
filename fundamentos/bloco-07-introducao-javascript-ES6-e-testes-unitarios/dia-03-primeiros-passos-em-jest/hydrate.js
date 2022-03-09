const hydrate = (drinks) => {
    let arrayDrinks = [];
    drinks = drinks.replace(/,/g, ' e ');
    arrayDrinks = drinks.split(' e ');
    let waterCups = 0;
  
    for (let index in arrayDrinks) {
      let cups = parseInt(arrayDrinks[index]);
      waterCups += cups;
    }

    let copo = 'copo';
  
    if (waterCups > 1) {
        copo = 'copos';
    }
    return `${waterCups} ${copo} de água`;
  };

  module.exports = hydrate;