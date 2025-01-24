

let arr1 = [
    {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
]

let  arr2 = [
    {"id": 1, "b": {"c": 84}, "v": [1, 3]}
]




let result={}

for(let i=0;i<arr1.length;i++){

    result[arr1[i].id]=arr1[i]
}


for (let i=0;i<arr2.length;i++){

    if(result[arr2[i].id]){
        for(const key in arr2[i]){
            console.log("ajlkghdgdsa")
            console.log(result[arr2[i].id][key])
            console.log(arr2[i][key])
        }
    }
    else{
        result[arr2[i].id]=arr2[i]
    }

}
console.log(result)

console.log(Object .values(result))