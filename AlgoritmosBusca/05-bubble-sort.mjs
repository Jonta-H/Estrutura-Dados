function bubbleSort(vetor){
    let swap;

    do{
        swap = false;

        for(let i = 0; i < vetor.length -1; i++){
            if(vetor[i] > vetor[i+1]) {
                [ vetor[i], vetor[i+1]] = [ vetor[i+1], vetor[i]]
                swap = true;
            }
        }
    } while(swap)
}

let nums = [4, 6, 2, 33, 10, 8, 9, 1, 5]

console.log(nums)
bubbleSort(nums)
console.log(nums)