
const arr=[1,2,3,4]

var reduce = function(nums, fn, init) {
    
    
    nums.forEach((index)=>{
     let   data=fn(init,index)
       init=data
       
    })
    return init

    
};


const fn=(accum, curr) =>{ return accum + curr * curr; }

console.log(reduce(arr,fn,100))