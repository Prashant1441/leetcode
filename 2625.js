let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]


let result=[]
n=2
while (n>0){
for(let i=0;i<arr.length;i++){

    if(Array.isArray(arr[i])){
        arr[i].forEach((item)=>{
            result.push(item)
        })
    }
    else {
        result.push(arr[i])
    }
}
arr=[...result]
result=[]
n=n-1
}

console.log(arr)
console.log(result)
