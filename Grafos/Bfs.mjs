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

    // Cria uma nova instância da fila
    const fila = new Queue();
    
    // Insere o no de partida no final da fila
    fila.enqueue(inicio);

    // Criar um laço que rode enquanto a fila não estiver vazia
    while(!fila.isEmpty){
        // Remove e armazena o primeiro elemento da fila (o mais antigo)
        const no = fila.dequeue();

        if(!visitados.has(no)){
            console.log(no);

            visitados.add(no);

            // Percorre cada um dos vizinhos do nó atual da lista de adjacentes
            for (const vizinho of grafo[no]){
                if(!visitados.has(vizinho)){
                    // Se o vizinho ainda não foi visitado, coloca-o no final da fila
                    fila.enqueue(vizinho);
                }
            }
        }
    }
}

bfs(grafo, "A")
