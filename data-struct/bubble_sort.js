values = [8, 7, 6, 5, 4, 3, 2, 1]

function bubble_sort(){
    let start = 0
    let end = 8

    for(turn = 0; turn < 8; turn++){
        for(pos = start; pos < end - 1 - turn; pos++){
            if(values[pos] > values[pos + 1]){
                tmp = values[pos]
                values[pos] = values[pos + 1]
                values[pos + 1] = tmp
            }
        }
    }
}

bubble_sort()
console.log("Vetor ordenado:")
console.log(values)