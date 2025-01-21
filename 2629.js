

const f1=(x)=>{
    return x+1

}
const f2=(x)=>{
    return x*x
}

const arr=[f1,f2]

let compose = function(functions) {
    
    return function(x) {

    for(let i=functions.length-1;i>=0;i--){
        x=functions[i](x)
        
        

    }
    return x
        
    }

};


const compare=compose(arr)(5)

console.log(compare)