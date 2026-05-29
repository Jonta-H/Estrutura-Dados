import Queue from '../EstruturasDados/lib/Queue.mjs';

const grafo = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: [],
    F: []
}

// Implementação da busca em largura (BFS)
function bfs(grafo, inicio){

    // Set é uma estrutura de dados nativa do JS - similar ao Array
    // Não permite elementos duplicados
    // Método .has() realiza busca instantânea 
    const visitados = new Set();

    const fila = new Queue();
    
    fila.enqueue(inicio);

    // Criar um laço que rode enquanto a fila não estiver vazia
    while(!fila.isEmpty){
        // Remove e armazena o primeiro elemento da fila (o mais antigo)
        const no = fila.dequeue();

        if(!visitados.has(no)){
            console.log(no);

            visitados.add(no);
        }
    }
}

bfs(grafo, "A")
