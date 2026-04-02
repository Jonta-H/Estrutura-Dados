import Stack from './Stack.mjs'

let pilha = new Stack()

pilha.push("Zé")
pilha.push("Jão")
pilha.push("Pedro")
pilha.push("Marcelo")

console.log(pilha.print())

pilha.pop()
pilha.pop()

console.log(pilha.history())