

const arr=[1,2,3,4]

function map(arr,fn){
    let arrResult=[]

    arr.forEach((element,index)=>{
        arrResult.push(fn(element,index))
    })
    return arrResult

}

const fn=(element)=> element+1 

console.log(map(arr,fn))

