import Stack from './Stack.mjs'

let pilha = new Stack(5);
console.log("Tamanho máximo: " + pilha.maxSize)


pilha.push("João")
pilha.push("Pedro")
console.log(pilha.print())

pilha.push("Marcelo")
pilha.push("Henrique")
pilha.push("Maria")
console.log(pilha.print())

pilha.push("Laura")
console.log(pilha.print())

pilha.pop()
pilha.pop()
pilha.push("Laura")
console.log(pilha.print())