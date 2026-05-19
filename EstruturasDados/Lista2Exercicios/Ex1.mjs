import Queue from './Queue.mjs'

let fila = new Queue();

fila.enqueue("Marta")
fila.enqueue("Cleber")
fila.enqueue("Jefferson")
fila.enqueue("Iolanda")

console.log(fila.print())

fila.dequeue();
fila.enqueue("Laura")

console.log("Operações feitas: " + fila.getOperationCount())