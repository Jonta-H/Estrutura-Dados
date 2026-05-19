class Node {
    constructor(val) {
        this.data = val
        this.next = null
    }
}

export default class LinkedList {
    #head // Início da lista (cabeça)
    #tail // Fim da lista (cauda)
    #count // Quantidade de nodos da lista
    #removedHistory

    constructor() {
        this.#head = null
        this.#tail = null
        this.#count = 0
        this.#removedHistory = []
    }

    // Getter que retorna se a lista encadeada está vazia
    get isEmpty() {
        return this.#count === 0
    }

    // Getter que retorna a quantidade de elementos da lista
    get count() {
        return this.#count
    }

    // Método para inserir em qualquer posição
    insert(pos, val) {
        // Cria um nodo para armazenar o valor pretendido
        const inserted = new Node(val)

        // 1º Caso: a lista está vazia
        if (this.isEmpty) {
            this.#head = inserted
            this.#tail = inserted
        }

        // 2º Caso: lista não vazia, inserção na primeira posição
        else if (pos === 0) {
            inserted.next = this.#head
            this.#head = inserted
        }

        // 3º Caso: inserção no final da lista
        else if (pos >= this.#count) {
            this.#tail.next = inserted
            this.#tail = inserted
        }

        // 4º Caso: inserção no meio da lista
        else {
            let before = this.#head
            for (let i = 1; i < pos; i++) {
                before = before.next
            }

            let after = before.next

            inserted.next = after
            before.next = inserted
        }


        this.#count++
    }

    // método para inserção na primeira posição (atalho)
    insertHead(val) {
        this.insert(0, val)
    }

    //método para inserção na ultima posição (atalho)
    insertTail(val) {
        this.insert(this.#count, val)
    }

    remove(pos) {
        //1º Caso: a lista está vazia ou a posição informada está fora dos limites da lista
        if (this.isEmpty || pos < 0 || pos > this.#count - 1) {
            return undefined
        }

        let removed

        // 2º Caso: remoção do inicio da lista
        if (pos === 0) {
            removed = this.#head
            this.#head = this.#head.next

            if (this.#count === 1) {
                this.#tail = null
            }
        }

        // 3º Caso: remoção de nodo intermediário ou final
        else {
            let before = this.#head

            for (let i = 1; i < pos; i++) {
                before = before.next
            }

            removed = before.next

            let after = removed.next

            before.next = after

            // atualiza o tail em caso de remoção
            if (pos === this.#count - 1) {
                this.#tail = before
            }
        }

        this.#removedHistory.push(removed.data)

        this.#count--

        return removed.data
    }

    // método para remover o primeiro nodo da lista (atalho)
    removeHead() {
        return this.remove(0)
    }

    // método para remover o último nodo da lista (atalho)
    removeTail() {
        return this.remove(this.#count - 1)
    }

    indexOf(val) {
        // 1º Caso: lista vazia
        if (this.isEmpty) {
            return -1
        }

        let node = this.#head

        for (let i = 0; i < this.#count; i++) {
            if (node.data === val) {
                return i
            }
            node = node.next
        }

        return -1
    }

    peek(pos) {
        // 1º Caso: lista vazia ou posição fora dos limites
        if (this.isEmpty || pos < 0 || pos > this.#count - 1) {
            return undefined
        }

        // 2º Caso: busca sequencial
        let node = this.#head
        for (let i = 0; i < pos; i++) {
            node = node.next
        }
        return node.data
    }

    peekHead() {
        return this.peek(0)
    }

    peekTail() {
        return this.peek(this.#count - 1)
    }

    // método para registrar os valores removidos
    history() {
        if (this.#removedHistory.length === 0) {
            return "Nenhuma remoção ainda."
        } else {
            let output = "[ "
            for (let n of this.#removedHistory) {
                if (output !== "[ ") {
                    output += ", "
                }
                output += n
            }
            return output + " ]"
        }
    }

    // método para inverter a ordem dos nós
    reverse() {
        let anterior = null;
        let atual = this.#head;
        let proximo = null;

        while (atual !== null) {
            proximo = atual.next;

            atual.next = anterior;

            anterior = atual;
            atual = proximo;
        }

        this.#head = anterior
    }

    // método para contar quantas vezes um valor aparece 
    countOccurrences(val) {
        if (this.isEmpty) {
            return "Lista vazia"
        }

        let count = 0
        let node = this.#head

        for (let i = 0; i < this.#count; i++) {
            if (node.data === val) {
                count++
            }
            node = node.next
        }
        return count
    }

    // método para remoção de todas as ocorrências de um valor
    removeAll(val) {
        if (this.isEmpty) {
            return "Lista vazia"
        }

        let node = this.#head
        let anterior = null;

        while (node != null) {

            if (node.data === val) {
                if (this.#head === node) {
                    this.#head = node.next
                    if (this.#head === null) {
                        this.#tail = null
                    }
                }
                else {
                    anterior.next = node.next
                    if (this.#tail === node) {
                        this.#tail = anterior
                    }
                }
                this.#removedHistory.push(node.data)
                this.#count--

                node = node.next
            }
            else {
                anterior = node
                node = node.next
            }
        }
    }

    // método para converter a lista encadeada em um array
    toArray(){
        let array = []
        let node = this.#head

        for(let i = 0; i < this.#count; i++){
            array.push(node.data)     
            node = node.next
        }

        return "[ " + array + " ]"
    }


    print() {
        let output = "{ "
        let node = this.#head

        for (let i = 0; i < this.#count; i++) {
            if (output !== "{ ") {
                output += ", "
            }
            output += `[${i}]: ${node.data}`
            node = node.next
        }
        output += " }"

        return output + ` Count: ${this.#count}`
    }
}