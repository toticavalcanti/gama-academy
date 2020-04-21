let elements = []
let topo     = -1
const MAX      = 10

function push(number){
    if( topo < MAX ){
        topo = topo + 1
        elements[topo] = number
    }
    else{
        console.log("A pilha está cheia!")
    }
}