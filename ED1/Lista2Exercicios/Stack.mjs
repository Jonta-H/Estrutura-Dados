export default class Stack{
    #data // vetor privado
    #historyData 
    #maxSize

    constructor(maxSize = 0){
        this.#data = []
        this.#historyData = []
        this.#maxSize = maxSize
    }

    // método para inserção no vetor
    // método pode ser criado com qualquer nome
    push(valor){
        if (this.#data.length >= this.#maxSize){
            console.log("Limite máximo atingido.")
            return
        }
        this.#data.push(valor)
    }

    // método de remoção do vetor
    pop(){
        let removido = this.#data.pop()
        this.#historyData.push(removido)
        return removido
    }

    // verificar qual o ultimo elemento
    peek(){
        return this.#data[this.#data.length-1]
    }

    // verifica se está vazio
    get isEmpty(){
        return this.#data.length === 0
    }

    get maxSize(){
        return this.#maxSize
    }

    history(){
        let output = "[ "
        for(let n of this.#historyData){
            if (output !== "[ "){
                output += ", "
            }
            output += n
        }
        return output + " ]"
    }

    // exibir a pilha
    print(){
        return JSON.stringify(this.#data)
    }


}