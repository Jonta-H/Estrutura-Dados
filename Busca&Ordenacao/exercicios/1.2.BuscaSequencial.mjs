function BuscaSequencial(vetor, fnComp){
    for(let i = 0; i < vetor.length; i++){
        if(fnComp(vetor[i])) return i;
    }

    return -1
}

function fnComp(obj){
    return obj.classification === 'F' && obj.frequency_total > 100000
}

import { objNomes } from '../data/vetor-obj-nomes.mjs'

console.log(objNomes[BuscaSequencial(objNomes, fnComp)].first_name) 