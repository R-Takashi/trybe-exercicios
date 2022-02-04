let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplicado = [];

for (let index = 1; index < numbers.length; index +=1){
    if (index + 1 < numbers.length){
        multiplicado.push(numbers[index] * numbers[index + 1]);
    }else{
        multiplicado.push(numbers[index] * 2);
    }
}
console.log(multiplicado);