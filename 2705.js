


let obj = [null, 0, 5, [0], [false, 16]]

const fun=function(obj){
if(Array.isArray(obj)){
    return obj.filter(Boolean).map((item)=>fun(item))
}
return obj


}


console.log(fun(obj))