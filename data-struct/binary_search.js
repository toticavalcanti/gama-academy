let values = [3, 5, 7, 11, 13, 27, 30, 35, 40, 100]

function binary_search(num){
    let start, end
    let mid
    start = 0
    end = 9

    while ( start <= end ){
        mid = parseInt( ( start + end ) / 2 )
        if( num == values[mid] ){
            return mid
        }else if( num > values[mid]){
            start = mid + 1
        }else{
            end = mid - 1
        }
    }
    return -1
}

console.log(binary_search(51))