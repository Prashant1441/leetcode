

let variable="(]"




const patternchecking= function(variable){
    let mapping =[]
for(i of variable){

    if(i==='(' || i==='{' || i==='[' ){
        mapping.push(i)
    }
    else{
        //check for ) || } || ]
        if(mapping.length===0)return false

        let last=mapping.pop()
        if(i===')' && last!=='(' ||
            i==='}' && last!=='{' ||
            i===']' && last!=='['
        )return false
}}
return true}

console.log(patternchecking(variable))