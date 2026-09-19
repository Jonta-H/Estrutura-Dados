let pass, comps, trocas

function selectionSort(vetor){
    
    for(let posSe1 = 0; posSe1 < vetor.length - 1; posSe1++){
     

        let posMenor = posSe1 + 1;

        for(let i = posMenor + 1; i < vetor.length; i++){
            if(vetor[posMenor] > vetor[i]) {
                posMenor = i
            }
        }

        if(vetor[posSe1] > vetor[posMenor]){
            [ vetor[posSe1], vetor[posMenor] ] = [ vetor[posMenor], vetor[posSe1] ];
            
        }
    }
}


let nums = [3, 4, 1, 7, 5, 8, 10, 2, 6, 9]

selectionSort(nums)

console.log(nums)


//import { nomes } from './data/nomes-desord.mjs'

//selectionSort(nomes)

//onsole.log(nomes)
//console.log({pass, comps, trocas})