import Stack from '../EstruturasDados/lib/Stack.mjs'

function detectarCiclo(grafo, inicio){
    const visitados = new Set();

    const pilha = new Stack();

    pilha.push(inicio);

    let paiDireto = {}

    while (!pilha.isEmpty) {
        const no = pilha.pop()

        if (!visitados.has(no)) {
            visitados.add(no);

            const vizinho = grafo[no];

            for (let i = vizinho.length - 1; i >= 0; i--) {
                // Faz o mapeamento dos pais diretos no grafo
                if(!(vizinho[i] in paiDireto) && vizinho[i] != inicio) paiDireto[vizinho[i]] = no;
                if (!visitados.has(vizinho[i])) {
                    pilha.push(vizinho[i]);
                } else{
                    // Se encontrado um vizinho já visitado que não seja o pai direto
                    // significa que há um ciclo
                    if (vizinho[i] != paiDireto[no]){
                        return true
                    } 
                }
            }
        } 
    }

    return false;
}

// Grafo Conexo e Acíclico (Árvore)
const grafoArvore = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B"],
  F: ["C"]
};

// Grafo Conexo com Ciclo
const grafoComCiclo = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B", "E"], // Conexão extra D-E que fecha um ciclo
  E: ["B", "D"],
  F: ["C"]
};

console.log("Grafo Árvore tem ciclo?", detectarCiclo(grafoArvore, "A")); // Saída esperada: false
console.log("Grafo com Ciclo tem ciclo?", detectarCiclo(grafoComCiclo, "A")); // Saída esperada: true