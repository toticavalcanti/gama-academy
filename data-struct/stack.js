let elements = []
let top     = -1
const MAX      = 10

function push(number){
    if( top < MAX ){
        top = top + 1
        elements[top] = number
    }
    else{
        console.log("A pilha está cheia!")
    }
}

function pop(){
    if(top != -1){
        let num = elements[top]
        top = top -1
        return num
    }
    else{
        console.log("A pilha está vazia")
    }
}

function emptyStack(){
    return top == -1
}

let rest;
decNum = 10

while(decNum != 0){
    rest = parseInt(decNum % 2)
    push(rest)
    decNum = parseInt(decNum / 2)
}

while(!emptyStack()){
    console.log(pop())
}
