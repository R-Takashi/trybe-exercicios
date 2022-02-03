const anguloUm = 80;
const anguloDois = 60;
const anguloTres = 40;

let somaAngulos = anguloUm + anguloDois + anguloTres;

if(anguloUm > 0 && anguloDois > 0 && anguloTres > 0){
    if (somaAngulos == 180){
    console.log(true);
    }else{
    console.log(false);
    }    
}else{
    console.log("Angulos inválidos");
}