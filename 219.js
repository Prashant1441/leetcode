

let num=[1,2,3,1,2,3]
let k=1



let mapping =new Map()

for (let i=0 ;i<num.length;i++){
    

    if(mapping.has(num[i])){
        if(i-mapping.get(num[i])<=k)console.log("okay")
    }
    mapping.set(num[i],i)


}
console.log("false")





console.log(mapping)
