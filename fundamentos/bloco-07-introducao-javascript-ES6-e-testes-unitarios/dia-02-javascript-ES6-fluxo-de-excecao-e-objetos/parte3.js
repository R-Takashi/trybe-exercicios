const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

const addTurno = (obj, chave, valor) => {
    obj[chave] = valor;
}
addTurno(lesson2, 'turno', 'noite');

console.table(lesson2);

const listaChaves = obj => Object.keys(obj);
console.log(listaChaves(lesson1));

const tamanhoObj = obj => Object.keys(obj).length;
console.log(tamanhoObj(lesson3));

const listaValores = obj => Object.values(obj);
console.log(listaValores(lesson1));

const allLessons = Object.assign({lesson1, lesson2, lesson3});
console.log(allLessons);

const totalEstudantes = obj => {
    let total = 0;
    const materias = Object.keys(obj);
    for (let index in materias) {
        total += obj[materias[index]].numeroEstudantes;
    }
    return total;
};
console.log(totalEstudantes(allLessons));

const getValueByNumber = (obj, numero) => Object.values(obj)[numero];
console.log(getValueByNumber(lesson1, 0));

const verifyPair = (obj, chave, valor) =>{
    const chaveValor = Object.entries(obj);
    let verifica = false;
    for (let index in chaveValor) {
        if (chaveValor[index][0] === chave && chaveValor[index][1] === valor){
            verifica = true;
        }
    }
    return verifica;
};

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false