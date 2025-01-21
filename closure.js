

function outer(n){

    
    return function one(){
        return n++
    }
}




const fun=outer(10)

console.log(fun())
console.log(fun())
console.log(fun())

