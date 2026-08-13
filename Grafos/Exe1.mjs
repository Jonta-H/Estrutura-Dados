import Queue from '../EstruturasDados/lib/Queue.mjs'

function obterDistanciasEBFS(grafo, inicio) {
    const visitados = new Set();
    const fila = new Queue();
    
    fila.enqueue(inicio);

    let obj = {'Distancias': {}, 'Caminhos': {}};

    while(!fila.isEmpty){
        const no = fila.dequeue();

        // Inicia um vetor para armazenar o caminho
        if(!(no in obj.Caminhos)) obj.Caminhos[no] = []

        if(!visitados.has(no)){
            visitados.add(no);

            for (const vizinho of grafo[no]){
                if(!visitados.has(vizinho)){
                    fila.enqueue(vizinho);
                } else{
                    // Se o vizinho já foi visitado, então o nó atual compartilha do mesmo caminho
                    if(obj.Caminhos[no].length === 0) {
                        obj.Caminhos[no] = obj.Caminhos[vizinho].slice() 
                        obj.Caminhos[no].push(no)
                    } else{
                        // Em situações de mais de um caminho, verifica qual o mais curto
                        // Por exemplo em um grafo com ciclos
                        if(obj.Caminhos[vizinho].slice().length < obj.Caminhos[no].length-1){
                            obj.Caminhos[no] = obj.Caminhos[vizinho].slice() 
                            obj.Caminhos[no].push(no)
                        }
                    }
                }
            }

            // Caso saia do For vazio, significa que ainda não passou por nenhum dos vizinhos
            // No caso, o início ou raíz do grafo
            if(obj.Caminhos[no].length === 0) obj.Caminhos[no].push(no)
        }

        obj.Distancias[no] = obj.Caminhos[no].length - 1;
    }

    return obj
}

const grafoArvore = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B"],
  F: ["C"]
};

// teste
const grafoComCiclo = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B", "E"], // Conexão extra D-E que fecha um ciclo
  E: ["B", "D"],
  F: ["C"]
};

console.log(obterDistanciasEBFS(grafoArvore, "A")); 
/* Saída esperada:
{
  "distancias": { "A": 0, "B": 1, "C": 1, "D": 2, "E": 2, "F": 2 },
  "caminhos": {
    "A": ["A"],
    "B": ["A", "B"],
    "C": ["A", "C"],
    "D": ["A", "B", "D"],
    "E": ["A", "B", "E"],
    "F": ["A", "C", "F"]
  }
}
*/