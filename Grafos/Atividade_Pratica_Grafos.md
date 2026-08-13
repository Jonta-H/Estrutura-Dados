# Atividade Prática: Algoritmos de Busca em Grafos (BFS e DFS)

Esta atividade prática tem como objetivo consolidar os conceitos de **Busca em Largura (BFS)** e **Busca em Profundidade (DFS)**. Vocês utilizarão como base as estruturas de dados desenvolvidas em sala de aula (`Queue` e `Stack`) e as implementações iniciais de busca para resolver problemas clássicos do mundo real.

---

## Exercícios Propostos

### Exercício 1: Menor Distância e Caminho Mínimo (com BFS)
A Busca em Largura (BFS) expande a busca nível por nível a partir de uma origem. Devido a essa propriedade, a BFS é o algoritmo perfeito para encontrar a **menor distância em número de arestas (saltos)** entre dois nós em um grafo não valorado.

**Sua tarefa:**
Implemente a função `obterDistanciasEBFS(grafo, inicio)` de forma que ela:
1. Calcule a distância (número de arestas) do vértice `inicio` para todos os outros vértices alcançáveis.
2. Armazene e reconstrua o caminho percorrido para chegar a cada nó.
3. Retorne um objeto contendo a lista de distâncias e os caminhos gerados.

---

### Exercício 2: Detecção de Ciclos em Grafos Não-Dirigidos (com DFS)
A Busca em Profundidade (DFS) explora os caminhos até o limite físico antes de fazer o retrocesso (*backtracking*). Essa característica a torna excelente para detecção de ciclos ou caminhos fechados.

**Sua tarefa:**
Em um grafo não-dirigido, um ciclo ocorre quando visitamos um vértice que já foi visitado anteriormente e que **não é o pai direto** do vértice atual na árvore de busca.
Implemente a função `detectarCiclo(grafo, inicio)` utilizando uma pilha (`Stack`) que retorne `true` se o grafo contiver um ciclo a partir do nó inicial, e `false` caso contrário.

*Dica:* Ao empilhar os vizinhos na DFS, controle quem foi o "pai" (vértice que descobriu o nó atual). Se encontrarmos um vizinho já visitado que não seja o pai do nó atual, encontramos um ciclo!

---

### Exercício 3: Quantidade de Componentes Conexos (Busca Global)
Um grafo é considerado **conexo** se existir um caminho entre qualquer par de vértices. Se houver "ilhas" isoladas, o grafo possui múltiplos componentes conexos.

**Sua tarefa:**
Implemente a função `contarComponentesConexos(grafo)` que percorra todo o grafo (mesmo que haja nós isolados ou subgrafos desconexos) e retorne o número de componentes conexos (ilhas).

*Dica:* Percorra todos os vértices do grafo. Se um vértice ainda não foi visitado em nenhuma busca anterior, execute uma BFS ou DFS a partir dele (marcando todos os nós de sua "ilha" como visitados) e incremente o contador de componentes.

---

## Código Esqueleto (Copie e Cole para Iniciar)

Utilize o modelo de código abaixo para iniciar a resolução:

```javascript
// Importa as classes desenvolvidas em sala
import Queue from "./";
import Stack from "./";

// ==========================================
// GRAFOS DE TESTE
// ==========================================

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

// Grafo Desconexo (com nós isolados)
const grafoDesconexo = {
  A: ["B"],
  B: ["A"],
  C: ["D"],
  D: ["C"],
  E: [] // Nó totalmente isolado
};

// ==========================================
// EXERCÍCIO 1: BFS COM DISTÂNCIAS E CAMINHOS
// ==========================================
function obterDistanciasEBFS(grafo, inicio) {

}

// ==========================================
// EXERCÍCIO 2: DETECÇÃO DE CICLOS COM DFS
// ==========================================
function detectarCiclo(grafo, inicio) {

}

// ==========================================
// EXERCÍCIO 3: COMPONENTES CONEXOS
// ==========================================
function contarComponentesConexos(grafo) {

}

// ==========================================
// TESTES DE VALIDAÇÃO
// ==========================================

console.log("--- TESTANDO EXERCÍCIO 1 (BFS) ---");
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

console.log("\n--- TESTANDO EXERCÍCIO 2 (DFS - Ciclo) ---");
console.log("Grafo Árvore tem ciclo?", detectarCiclo(grafoArvore, "A")); // Saída esperada: false
console.log("Grafo com Ciclo tem ciclo?", detectarCiclo(grafoComCiclo, "A")); // Saída esperada: true

console.log("\n--- TESTANDO EXERCÍCIO 3 (Componentes Conexos) ---");
console.log("Qtd Componentes grafoArvore:", contarComponentesConexos(grafoArvore)); // Saída esperada: 1
console.log("Qtd Componentes grafoDesconexo:", contarComponentesConexos(grafoDesconexo)); // Saída esperada: 3
```
