import Deque from './Deque.mjs'

let deque = new Deque(5);
console.log("Tamanho do deque: " + deque.size() +
            "\nTamanho máximo: " + deque.maxSize)


deque.insertBack("João")
deque.insertBack("Pedro")
console.log(deque.print())

deque.insertFront("Marcelo")
deque.insertFront("Henrique")
console.log(deque.print())

deque.insertFront("Maria")
deque.insertFront("Laura")
console.log(deque.print())