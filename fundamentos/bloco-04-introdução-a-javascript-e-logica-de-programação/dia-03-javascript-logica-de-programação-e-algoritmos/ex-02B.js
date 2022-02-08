let n = 5;
let figura = "" ;
let posicaoN = n ;

for(let linha = 0 ; linha < n ; linha += 1){
    for(let coluna = 0 ; coluna < n ; coluna += 1){
        if(coluna < posicaoN-1){
            figura += ' ';
        }else{
            figura += '*';
        }
    }
    console.log(figura);
    figura = '' ;
    posicaoN -= 1 ;
}
