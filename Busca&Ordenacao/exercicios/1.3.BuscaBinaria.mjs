/* 
    Busca binária exige que o vetor esteja ordenado devido à sua lógica
    Durante sua execução, o algoritmo busca repartir o vetor a partir de um elemento
    selecionado como o 'Meio' do array, descartando a metade do vetor maior ou menor
    que o elemento buscado.
*/

function BuscaBinaria(vetor, fnComp, x){
    let ini = 0;
    let fim = vetor.length - 1;
    let comps = 0;

    while(fim >= ini){
        let meio = Math.floor((ini + fim) / 2)
        
        comps++
        switch (fnComp(vetor[meio], x)) {
            case 0:
                return [meio, comps];
            case 1:
                ini = meio + 1
                break;
            default:
                fim = meio - 1
                break;
        }
    }

    return -1;
}

function fnComp(objMeio, valorBusca){
    if(objMeio.group_name === valorBusca) return 0
    else if(objMeio.group_name < valorBusca) return 1
    else return -1
}

import { objNomes } from '../data/vetor-obj-nomes.mjs'

let resultado = BuscaBinaria(objNomes, fnComp, 'MARINA')

console.log('Index: ', resultado[0], objNomes[resultado[0]], '\nComparações:', resultado[1])