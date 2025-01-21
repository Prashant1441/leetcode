

let arr1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
]
let arr2 = [
    {"id":2,"x":6},
    {"id": 3, "x": 5}
]


console.log("arr1",arr1.length,"arr2",arr2.length)

const all=[...arr1,...arr2]
console.log(all)

const result=arr1.concat(arr2)