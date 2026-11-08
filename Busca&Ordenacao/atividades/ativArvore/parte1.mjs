import BinarySeachTree from '../../lib/BinarySearchTree.mjs'

let arvore = new BinarySeachTree()

arvore.insert(50)
arvore.insert(30)
arvore.insert(70)
arvore.insert(20)
arvore.insert(40)
arvore.insert(60)
arvore.insert(80)

let inOrder = []
let preOrder = []
let postOrder = []

arvore.inOrderTraversal(val => inOrder.push(val))
console.log("Em-ordem => " + inOrder)

arvore.preOrderTraversal(val => preOrder.push(val))
console.log("Pré-ordem => " + preOrder)

arvore.postOrderTraversal(val => postOrder.push(val))
console.log("Pós-ordem => " + postOrder)

/* 
    Acontece pois o algoritmo seleciona sempre o nó à esquerda,
    contendo o menor valor da subárvore e seguindo assim até que não 
    haja mais valores, retornando portanto o menor valor encontrado 
    e somente a partir daí retornando à raíz da subárove e então seguindo pela direita,
    seguindo então o padrão: esquerda > raíz > direita; formando assim a ordem crescente.
*/