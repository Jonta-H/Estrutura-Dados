// JONATA HENRIQUE DA SILVA CARÁ - 27274

class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

export default class BinarySearchTree {
  #root;

  constructor() {
    this.#root = null;
  }

  insert(val) {
    const inserted = new Node(val);

    if (this.#root === null) {
      this.#root = inserted;
    }
    else {
      this.#insertNode(inserted, this.#root);
    }
  }

  #insertNode(inserted, root) {
    if (inserted.data < root.data) {
      if (root.left === null) {
        root.left = inserted;
      }
      else {
        this.#insertNode(inserted, root.left);
      }
    } else if (inserted.data > root.data) {
      if (root.right === null) {
        root.right = inserted;
      }
      else {
        this.#insertNode(inserted, root.right);
      }
    } else {
      this.#insertNode(inserted, root.left);
    }
  }

  inOrderTraversal(fnCallback, root = this.#root) {
    if (root !== null) {
      this.inOrderTraversal(fnCallback, root.left);
      fnCallback(root.data);
      this.inOrderTraversal(fnCallback, root.right);
    }
  }

  preOrderTraversal(fnCallback, root = this.#root) {
    if (root !== null) {
      fnCallback(root.data);
      this.preOrderTraversal(fnCallback, root.left);
      this.preOrderTraversal(fnCallback, root.right); 
    }
  }

  postOrderTraversal(fnCallback, root = this.#root){
      if(root !== null) {
          this.postOrderTraversal(fnCallback, root.left);
          this.postOrderTraversal(fnCallback, root.right);
          fnCallback(root.data);
      }
  }

  #minNode(root){
      while(root !== null && root.left !== null) {
          root = root.left;
      }
      return root;
  }

  #maxNode(root) {
  while (root !== null && root.right !== null) root = root.right;
  return root;
}

  //
  remove(val) {
      this.#root = this.#removeNode(this.#root, val);
  }

  #removeNode(root, val) {
      if (root === null) return null;

      if (val < root.data) {
          root.left = this.#removeNode(root.left, val);
          return root;
      }

      if (val > root.data) {
          root.right = this.#removeNode(root.right, val);
          return root;
      }

      if (root.left === null && root.right === null) {
          root = null;
          return root;
      }

      if (root.left !== null && root.right === null) {
          root = root.left;
          return root;
      }

      if (root.left === null && root.right !== null) {
          root = root.right;
          return root;
      }

      const newRoot = this.#minNode(root.right);

      root.data = newRoot.data;

      // Excluímos o valor
      root.right = this.#removeNode(root.right, newRoot.data);

      return root;
  }

  search(val){
    const node = this.#searchNode(this.#root, val);
    return node !== null;
  }

  #searchNode(root, val){
    if(root === null) return null;

    if(val < root.data) return this.#searchNode(root.left, val);

    if(val > root.data) return this.#searchNode(root.right, val);

    return root;
  }

  height(raiz = this.#root){
    if(raiz === null) return -1

    let esquerda = this.height(raiz.left)
    let direita = this.height(raiz.right)

    let maior = Math.max(esquerda, direita)
  
    // Retorna a altura da árvore com base no maior ramo
    return 1 + maior
  }

  countLeaves(raiz = this.#root){
    if(raiz === null) return 0
    
    if(raiz.left === null && raiz.right === null) return 1

    // Percorre os nós somando +1 sempre que não houver mais subárvores para seguir
    return this.countLeaves(raiz.left) + this.countLeaves(raiz.right)
  }

  // Método de impressão da árvore deitada
  printTree(raiz = this.#root, espaco = 0){
    if(raiz === null) return

    espaco += 4

    this.printTree(raiz.right, espaco)

    console.log(' '.repeat(espaco - 4) + raiz.data)

    this.printTree(raiz.left, espaco)
  }
}