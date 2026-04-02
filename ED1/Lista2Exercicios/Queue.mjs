export default class Queue{

    #data // vetor privado
    #operationCount = 0

    constructor(){
        this.#data = []
    }

    // método para inserção na fila
    enqueue(val){
        this.#operationCount++
        this.#data.push(val)
    }

    // método para remoção na fila
    dequeue(){
        this.#operationCount++
        return this.#data.shift()
    }

    // método para consultar o primeiro da fila
    peek(){
        return this.#data[0]
    }

    // método para verificar se a fila esta vazia
    get isEmpty(){
        return this.#data.length === 0
    }

    getOperationCount(){
        return this.#operationCount
    }

    // método para impressão da fila
    print(){
        let output = "[ "
        for(let i = 0; i < this.#data.length; i++){
            if (output !== "[ "){
                output += ", "
            }
            output += `(${i}): ${this.#data[i]}`
        }
        return output + " ]"
    }

}