function multiplicarRecomendacao(matrizEsparsa, vetorDenso) {
    let vetor = new Array(4).fill(0);
    for (const tripla of matrizEsparsa) {
        vetor[tripla.linha] += tripla.valor * vetorDenso[tripla.coluna]
    }
    return vetor;
}

const avaliacoes = [
    // Linha: Usuarios, Coluna: Filmes, Valor: Notas
    { linha: 0, coluna: 1, valor: 5 },
    { linha: 1, coluna: 3, valor: 2 },
    { linha: 3, coluna: 0, valor: 4 }
]

const pesos = [10, 20, 30, 40, 50]

console.log("Seu resultado: ", multiplicarRecomendacao(avaliacoes, pesos)) 

/* Pergunta 1:
    Seriam necessários 40 Gigabytes, visto que seriam 10 bilhões de números armazenados, cada um
    ocupando 4 bytes resultando em 40 bilhões de bytes.
*/

/* Pergunta 2:
    Seria necessário 1,2 Gigabytes. Considerando que cada usuário assiste em média 100 filmes e que para cada
    filme assistido é gerado uma tripla, multiplicando a média de filmes pelo total de usuários chegamos no número de
    100 milhões de triplas. Cada tripla ocupa 12 bytes (3 números) portanto no total são 1,2 bilhões de bytes.
*/

/* Pergunta 3:
    Sendo 1,2 GB exatos 3% de 40 GB, pode-se estipular uma economia de 97% de memória 
*/

/* Justificativa de Desempenho:
    O algoritmo que utiliza a Matriz Esparsa (formato COO) é muito mais rápido porque ele processa estritamente os dados 
    que existem. Se percorrêssemos a matriz densa linha por linha e coluna por coluna, o laço de repetição iteraria 20 vezes, 
    processando diversos zeros desnecessariamente. Com a lista de triplas, o laço executa apenas 3 vezes, resultando em uma complexidade de tempo O(n).
*/