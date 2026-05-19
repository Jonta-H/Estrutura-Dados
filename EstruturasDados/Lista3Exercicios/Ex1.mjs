import LinkedList from './LinkedList.mjs'

let listaEncadeada = new LinkedList()

console.log(`Lista atual: ${listaEncadeada.print()}`)
console.log(`Histórico de remoções: ${listaEncadeada.history()}`)

listaEncadeada.insertHead("Item1")
listaEncadeada.insert(2 ,"Item2")
listaEncadeada.insert(3 ,"Item3")
listaEncadeada.insertTail("Item4")

console.log(`Lista após inserções: ${listaEncadeada.print()}`)

listaEncadeada.removeHead()
listaEncadeada.remove(1)

console.log(`Lista após remoções: ${listaEncadeada.print()}`)
console.log(`Histórico de remoções: ${listaEncadeada.history()}`)