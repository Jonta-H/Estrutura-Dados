import LinkedList from "./LinkedList.mjs";

let lista = new LinkedList()

lista.insertHead("Item1")
lista.insertTail("Item2")
lista.insertTail("Item1")
lista.insertTail("Item3")
lista.insertTail("Item1")
lista.insertTail("Item4")
lista.insertTail("Item5")

console.log(`Lista atual: ${lista.print()}`)

lista.reverse()

console.log(`Lista após Reverse(): ${lista.print()}`)
console.log(`Ocorrências de "Item1": ${lista.countOccurrences("Item1")}`)
console.log(`Ocorrências de "Item5": ${lista.countOccurrences("Item5")}`)