let values = [7, 3, 5, 11, 27, 13]

function naive_search(num){
    for(i = 0; i < 6; i++){
        if(num == values[i]){
            return i
        }
    }
    return -1
}

console.log(naive_search(11))
console.log(naive_search(5))
console.log(naive_search(21))