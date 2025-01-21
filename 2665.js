var createCounter = function(init) {
    let value=init
    
    function increment(){
        
        return ++value
    }

    function reset(){
        value=init
        return init
    }

    function decrement(){
    
        return --value
    }

    return {increment,reset,decrement}
    
};

const counter=createCounter(0)

console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())