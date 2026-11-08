// JONATA HENRIQUE DA SILVA CARÁ - 27274

class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

export default class AlunosABB {
  #root; //raiz da árvore

  constructor() {
    this.#root = null;
  }

  insert(val) {
    const inserted = new Node(val);

    if (this.#root === null) {
      this.#root = inserted;
      return true
    }
    else {
      return this.#insertNode(inserted, this.#root);
    }
  }

  #insertNode(inserted, root) {
    if (inserted.data.ra < root.data.ra) {
      if (root.left === null) {
        root.left = inserted;
        return true
      }
      else {
        return this.#insertNode(inserted, root.left);
      }
    } else if (inserted.data.ra > root.data.ra) {
      if (root.right === null) {
        root.right = inserted;
        return true
      }
      else {
        return this.#insertNode(inserted, root.right);
      }
    } else {
      return false
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

  remove(ra) {
      this.#root = this.#removeNode(this.#root, ra);
  }

  #removeNode(root, ra) {
      if (root === null) return null;

      if (ra < root.data.ra) {
          root.left = this.#removeNode(root.left, ra);
          return root;
      }

      if (ra > root.data.ra) {
          root.right = this.#removeNode(root.right, ra);
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

      root.right = this.#removeNode(root.right, newRoot.data.ra);

      return root;
  }


  searchStudent(ra){
    const aluno = this.#searchNode(this.#root, ra);
    
    return aluno ? aluno.data : null
  }

  #searchNode(root, ra){
    if(root === null) return null;

    if(ra < root.data.ra) return this.#searchNode(root.left, ra);

    if(ra > root.data.ra) return this.#searchNode(root.right, ra);

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

  count(raiz = this.#root){
    if(raiz === null) return 0

    // Chamada recursiva que soma +1 para cada só visitado
    // Caso encontre uma posição vazia (null), soma 0
    return 1 + this.count(raiz.left) + this.count(raiz.right)
  }

  averageGrade(){
    let soma = 0

    // Utiliza o percurso em-ordem para passar por todos os nós somando as médias
    this.inOrderTraversal(aluno => soma += aluno.media)

    return soma / this.count()
  }
}