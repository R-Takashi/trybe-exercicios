function techList(nameTech, name) {
    let arrayTech = [];
    for (let index in nameTech) {
      arrayTech.push({
        tech: nameTech.sort()[index],
        name: name,
      });
    }
    if (arrayTech.length === 0) {
      return 'Vazio!';
    }
    return arrayTech;
  }


module.exports = techList;