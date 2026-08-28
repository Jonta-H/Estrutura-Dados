function mergeSort(vetor){
    if(vetor.length < 2) return vetor;

    let meio = Math.floor(vetor.length / 2);

    let vetEsq = vetor.slice(0, meio);
    let vetDir = vetor.slice(meio);

    vetEsq = mergeSort(vetEsq);
    vetDir = mergeSort(vetDir);

    let posEsq = 0, posDir = 0, vetRes = [];

    while(posEsq < vetEsq.length && posDir < vetDir.length){
        if(vetEsq[posEsq] < vetDir[posDir]){
            vetRes.push(vetEsq[posEsq])
            posEsq++
        } else {
            vetRes.push(vetDir[posDir])
            posDir++
        }
    }

    let sobra;

    if(posEsq < posDir){
        sobra = vetEsq.slice(posEsq)
    } else{
        sobra = vetDir.slice(posDir)
    }

    return [...vetRes, ...sobra]
}

let nums = [77, 44, 22, 33, 99]

let numsOrd = mergeSort(nums)

import { nomes } from './data/nomes-desord.mjs'

let nomesOrd = mergeSort(nomes)

console.log(numsOrd)
console.log(nomesOrd)
