function MatrizEsparsaDensa(matrizEsparsa, linhas, colunas){
    const matriz = Array.from({length: linhas}, () => Array(colunas).fill(0));
    for(const {linha, coluna, valor} of matrizEsparsa){
        matriz[linha][coluna] = valor;
    }
    return matriz.map((linha) => linha.join("  ")).join("\n");
}

const matrizEsparsa = [
    {linha: 3, coluna: 0, valor:3},
    {linha:1, coluna:1, valor:8},
    {linha:0, coluna:3, valor:5}
]

console.log(MatrizEsparsaDensa(matrizEsparsa, 4, 4))