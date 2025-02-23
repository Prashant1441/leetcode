
let s="egg"
let t="add"

let mapping =new Map()
if(s.length!=t.length)return false

 for(i  in s){

    if(mapping.has(s[i])){
        console.log(mapping.has(s[i]))
        if(t[i]===mapping.get(s[i]))
        console.log(t[i])
    }
    mapping.set(s[i],t[i])
    
 }
 



