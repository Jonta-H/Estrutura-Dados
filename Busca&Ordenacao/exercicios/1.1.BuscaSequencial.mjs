function BuscaSequencial(vetor, x){
    let ini = 0;
    let fim = vetor.length;
    let comp = 0;

    for(let i = ini; i < fim; i++){
        comp++
        if(vetor[i] === x) return {'Posição':i, 'Comparações':comp}
    }

    return -1
}

import { nomes } from '../data/vetor-nomes.mjs'

let tabelaComp = [BuscaSequencial(nomes, 'ANGELICA'), BuscaSequencial(nomes, 'MARINA'), BuscaSequencial(nomes, 'VITORIA')]
console.table(tabelaComp)

/* 
    O número de comparações em uma busca binária será sempre 
    uma unidade acima da posição de vetores de indexação base zero (começa em 0)
    Por conta de como é feita a contagem dos Arrays, as comparações, que seguem uma ordem ordinal, serão sempre
    referentes ao elemento anterior no vetor
    Ex.: 
        vetor[0] == x ? i = 0 & comp = 1 : i++
        vetor[1] == x ? i = 1 & comp = 2 : i++
*/