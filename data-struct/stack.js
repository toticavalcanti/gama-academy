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

push(30)
push(20)
push(5)

console.log(elements)
console.log(pop())
console.log(pop())
console.log(pop())