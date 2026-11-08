// JONATA HENRIQUE DA SILVA CARÁ - 27274

import BinarySeachTree from './BinarySearchTree.mjs'

// -------- EXERCÍCIO 1
console.log("-------- EXERCÍCIO 1")
let arvore1 = new BinarySeachTree()

arvore1.insert(50)
arvore1.insert(30)
arvore1.insert(70)
arvore1.insert(20)
arvore1.insert(40)
arvore1.insert(60)
arvore1.insert(80)

let inOrder = []
let preOrder = []
let postOrder = []


arvore1.inOrderTraversal(val => inOrder.push(val))
console.log("Em-ordem => " + inOrder)

arvore1.preOrderTraversal(val => preOrder.push(val))
console.log("Pré-ordem => " + preOrder)

arvore1.postOrderTraversal(val => postOrder.push(val))
console.log("Pós-ordem => " + postOrder)

/* 
    Acontece pois o algoritmo seleciona sempre o nó à esquerda,
    contendo o menor valor da subárvore e seguindo assim até que não 
    haja mais valores, retornando portanto o menor valor encontrado 
    e somente a partir daí retornando à raíz da subárove e então seguindo pela direita,
    seguindo então o padrão: esquerda > raíz > direita; formando assim a ordem crescente.
*/

console.log()
console.log()

// -------- EXERCÍCIO 2
console.log("-------- EXERCÍCIO 2")
let arvore2 = new BinarySeachTree()

arvore2.insert(8)
arvore2.insert(3)
arvore2.insert(10)
arvore2.insert(1)
arvore2.insert(6)
arvore2.insert(14)
arvore2.insert(4)
arvore2.insert(7)
arvore2.insert(13)

inOrder = []
preOrder = []
postOrder = []

arvore2.inOrderTraversal(val => inOrder.push(val))
console.log("Em-ordem => " + inOrder)

arvore2.preOrderTraversal(val => preOrder.push(val))
console.log("Pré-ordem => " + preOrder)

arvore2.postOrderTraversal(val => postOrder.push(val))
console.log("Pós-ordem => " + postOrder)

console.log("Altura =>", arvore2.height())
console.log("Número de folhas =>", arvore2.countLeaves())


console.log()
console.log()

// -------- EXERCÍCIO 3
console.log("-------- EXERCÍCIO 3")

let arvore3 = new BinarySeachTree()

arvore3.insert(1)
arvore3.insert(2)
arvore3.insert(3)
arvore3.insert(4)
arvore3.insert(5)

console.log("a) Altura =>", arvore3.height())

/* 
    a. Inserir valores dessa forma transforma a Arvore Binária em uma
    estrutura linear, perdendo a vantagem da busca rápida, deixando
    de dividir o trabalho e sendo necessário percorrer os elementos um por um, 
    se aproximando assim do pior cenário O(n)
*/

console.log()

let arvore4 = new BinarySeachTree()

arvore4.insert(50)
arvore4.insert(70)
arvore4.insert(30)
arvore4.insert(60)
arvore4.insert(80)
arvore4.insert(20)
arvore4.insert(40)

console.log("b) Comparando com a árvore do Exercício 1")
preOrder = []
arvore1.preOrderTraversal(val => preOrder.push(val))
console.log("Arvore 1 pre-ordem => " + preOrder)

preOrder = []
arvore4.preOrderTraversal(val => preOrder.push(val))
console.log("Arvore 4 pre-ordem => " + preOrder)

/*
    b. A árvore permanece igual nesse caso porque a raiz e as subárvores 
    são definidas pela mesma relação de ordem entre os valores. 
    Como os elementos menores continuam indo para a esquerda e os maiores 
    para a direita, a estrutura final fica equivalente, mesmo com a ordem de 
    inserção diferente.
*/

console.log()

let arvore5 = new BinarySeachTree()

arvore5.insert(50)
arvore5.insert(60)
arvore5.insert(40)
arvore5.insert(80)
arvore5.insert(70)
arvore5.insert(20)
arvore5.insert(30)

console.log("c) Outra ordem de inserção")
preOrder = []
arvore5.preOrderTraversal(val => preOrder.push(val))
console.log("Arvore 5 pre-ordem => " + preOrder)

/*
    c. Nesse caso, a ordem de inserção alterou a relação entre os valores,
    fazendo com que as subárvores fossem montadas de forma diferente.
*/

console.log()

console.log("-------- BÔNUS\n")
arvore1.printTree()