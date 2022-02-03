let pecaXadrez = "Bispo";

switch (pecaXadrez.toLowerCase()){
    case "rei":
        console.log("Todas as direções, uma casa");
    break;
    case "rainha":
        console.log("Todas as direções");
    break;
    case "bispo":
        console.log("Diagonais");
    break;
    case "cavalo":
        console.log("Movimentação em 'L', possível pular peças");
    break;
    case "torre":
        console.log("Vertical ou horizontal");
    break;
    case "peao":
        console.log("Vertical, sempre em frente");
    break;
    default:
        console.log("Peça inválida");
    break;
}