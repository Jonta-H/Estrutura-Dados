import Queue from "../EstruturasDados/lib/Queue.mjs";

function contarComponentesConexos(grafo) {
    let componentes = 0

    let restantes = Object.keys(grafo)
    while(restantes.length > 0){
        const visitados = bfs(grafo, restantes[0])
        restantes = restantes.filter(v => !visitados.has(v))
        componentes++
    }
    return componentes
}

function bfs(grafo, inicio){
    const visitados = new Set();

    const fila = new Queue();
    
    fila.enqueue(inicio);

    while(!fila.isEmpty){
        const no = fila.dequeue();

        if(!visitados.has(no)){
            visitados.add(no);

            for (const vizinho of grafo[no]){
                if(!visitados.has(vizinho)){
                    fila.enqueue(vizinho);
                }
            }
        }
    }

    return visitados
}

// Grafo Desconexo (com nós isolados)
const grafoDesconexo = {
  A: ["B"],
  B: ["A"],
  C: ["D"],
  D: ["C"],
  E: [] // Nó totalmente isolado
};

// Grafo Conexo e Acíclico (Árvore)
const grafoArvore = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B"],
  F: ["C"]
};

console.log("Qtd Componentes grafoArvore:", contarComponentesConexos(grafoArvore)); // Saída esperada: 1
console.log("Qtd Componentes grafoDesconexo:", contarComponentesConexos(grafoDesconexo)); // Saída esperada: 3