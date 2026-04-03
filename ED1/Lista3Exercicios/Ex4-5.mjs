import LinkedList from "./LinkedList.mjs";

let lista = new LinkedList()

lista.insertHead("Item1")
lista.insertHead("Item1")
lista.insertTail("Item2")
lista.insertTail("Item1")
lista.insertTail("Item3")
lista.insertTail("Item1")
lista.insertTail("Item4")
lista.insertTail("Item5")

console.log(`\nLista antes da remoção de "Item1": ${lista.print()}`)
console.log(`Lista atual como array: ${lista.toArray()}\n`)

lista.removeAll("Item1")

console.log(`Lista após remoção de "Item1": ${lista.print()}`)

console.log(`Removidos: ${lista.history()}`)

console.log(`\nLista atual como array: ${lista.toArray()}`)