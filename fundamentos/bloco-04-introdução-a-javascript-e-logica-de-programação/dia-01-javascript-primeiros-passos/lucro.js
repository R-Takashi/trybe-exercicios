const valorCusto = 100;
const valorVenda = 150;
let valorCustoTotal = valorCusto + ((20 * 100) / valorCusto);

if (valorCusto >= 0 && valorVenda >= 0){
    let lucro = (valorVenda - valorCustoTotal) *1000;
    console.log(lucro);
}else{
    console.log("Valores negativos");
}