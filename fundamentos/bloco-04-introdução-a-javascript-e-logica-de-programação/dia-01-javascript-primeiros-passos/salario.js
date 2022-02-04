let valorInss ;
let impostoRenda ;
let salarioBruto = 3000;
let salarioBase ;

if (salarioBruto <= 1556.94){
    valorInss = (8 * salarioBruto)/ 100;
}else if (salarioBruto <= 2594.92){
    valorInss = (9 * salarioBruto)/ 100;
}else if (salarioBruto <= 5189.82){
    valorInss = (11 * salarioBruto)/ 100;
}else{
    valorInss = 570.88;
}

salarioBase = salarioBruto - valorInss;

console.log("Salário Base : " + salarioBase);

if (salarioBase <= 1903.98){
    impostoRenda = 0;
}else if (salarioBase <= 2826.65){
    impostoRenda = ((7.5 * salarioBase)/ 100) - 142.80;
}else if (salarioBase <= 3751.05){
    impostoRenda = ((15 * salarioBase)/ 100) - 354.80;
}else if (salarioBase <= 4664.68){
    impostoRenda = ((22.5 * salarioBase)/ 100) - 636.13;
}else{
    impostoRenda = ((27.5 * salarioBase)/ 100) - 869.36;
}
console.log("Imposto de Renda : " + impostoRenda);
console.log("Salário: " + (salarioBase - impostoRenda));


