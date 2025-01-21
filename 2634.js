

const arr=[1,2,3]
let filter = function(arr, fn) {
    let arr1=[]
    

    arr.forEach((element,index)=>{
        let data=fn(element,index)
        if(data!=undefined){
            arr1.push(data)
        }
        
    })
   

    return arr1
    
    
};


const fn=(n,i)=>{
if(i===0) return n
}

console.log(filter(arr,fn))