let pass, comps, trocas

function selectionSort(vetor){
    pass = 0, comps = 0, trocas = 0;
    
    for(let posSe1 = 0; posSe1 < vetor.length - 1; posSe1++){
        pass++

        let posMenor = posSe1 + 1;

        for(let i = posMenor + 1; i < vetor.length; i++){
            if(vetor[posMenor] > vetor[i]) {
                posMenor = i
            }
            comps++
        }

        comps++
        if(vetor[posSe1] > vetor[posMenor]){
            [ vetor[posSe1], vetor[posMenor] ] = [ vetor[posMenor], vetor[posSe1] ];
            trocas++
        }
    }
}

/*
let nums = [3, 4, 1, 7, 5, 8, 10, 2, 6, 9]

selectionSort(nums)

console.log(nums)
*/

import { nomes } from './data/nomes-desord.mjs'

selectionSort(nomes)

console.log(nomes)
console.log({pass, comps, trocas})