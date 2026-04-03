import Deque from './Deque.mjs'

let deque = new Deque(5)

deque.insertBack("Pão")
deque.insertBack("Arroz")
deque.insertBack("Feijão")
console.log(deque.print())

deque.insertFront("Pão")
deque.insertFront("Macarrão")
deque.insertFront("Refrigerante")

console.log(deque.print())

deque.insertBack("Arroz")