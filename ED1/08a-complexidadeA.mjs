// O(1), porque a operação de acesso ao primeiro elemento do array é feita em tempo constante, independentemente do tamanho do array
function exampleO1(arr) {
  if (arr.length === 0) return null;
  return arr[0];
}

// const arr = [5, 7, 8, 9, 2, 3, 4];
// console.log(exampleO1(arr))

// O(log n), porque a cada iteração, o valor de i é multiplicado por 2, o que significa que o número de iterações necessárias para que i atinja "n" é logarítimico em relação a "n"
function exemploOlogN(n) {
    let i = 1;
    while (i < n) {
        console.log(i);
        i *= 2;
    }
}
// console.log(exemploOlogN(5))

// O(n), porque a funcção percorre todos os elementos do array um vez, realizando uma operação constante para cada elemento (console.log)
function exemploOn(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// exemploOn(arr);

// O(n^2), porque a função contém dois loops aninhados que percorrem todos os elentos do array, resultando em um número total de operações proporcional ao quadrado do tamanho do array
function exemploN2(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }
    }
}

const arr = [1,2,3,4,5];
exemploN2(arr)