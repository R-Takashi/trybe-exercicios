const a = 4;
const b = 6;
const c = 8

if(a > b && a > c){
    console.log(a);
}else if (b > a && b > c){
    console.log(b);
}else if(c > a && c > b){
    console.log(c)
}
else{
    console.log("Valores iguais");
}