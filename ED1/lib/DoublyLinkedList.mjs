class Node{
    constructor(val){
        this.prev = null;
        this.data = val;
        this.next = null;
    }    
}

export default class DoublyLinkedList{
    #head;
    #tail;
    #count;

    constructor(){
        this.#head = null;
        this.#tail = null;
        this.#count = 0;
    }

    get isEmpty(){
        return this.#count === 0;
    }

    get count(){
        return this.#count;
    }

    // método PRIVADO que encontra um nodo por sua posição
    #findNode(pos){
        let node;
        
        // nodo encontra-se na PRIMEIRA metade da lista
        if(pos < this.#count / 2){
            node = this.#head;
            for(let i = 0; i < pos; i++){
                node = node.next;
            }
        // nodo encontra-se na SEGUNDA metade da lista
        } else{
            node = this.#tail;
            for(let i = this.#count - 1; i > pos; i--){
                node = node.prev;
            }
        }

        return node;
    }

    // método para inserir em qualquer posição
    insert(pos, val){
        let inserted = new Node(val);

        // 1º Caso: lista vazia
        if(this.isEmpty){
            this.#head = inserted;
            this.#tail = inserted;
        }

        // 2º Caso: inserção na primeira posição
        else if(pos === 0){
            inserted.next = this.#head;
            this.#head.prev = inserted;
            this.#head = inserted;
        }

        // 3º Caso: inserção na última posição
        else if(pos >= this.#count){
            inserted.prev = this.#tail;
            this.#tail.next = inserted;
            this.#tail = inserted;
        }

        // 4º Caso: inserção em posição intermediária
        else{
            let nodePos = this.#findNode(pos);
            let before = nodePos.prev;

            before.next = inserted;

            inserted.prev = before;

            nodePos.prev = inserted;

            inserted.next = nodePos;
        }

        this.#count++;
    }

}