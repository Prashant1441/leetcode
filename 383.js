


let ransom="aa"
let magazine ="aab"


let magazinemap=new Map()

for(let char of magazine){
    magazinemap.set(char,(magazinemap.get(char)||0)+1)
}
console.log(magazinemap)

for(let char in ransom){
    if(!magazine.get(char)) return false
    magazine.set(magazinemap.get(char)-1)
}
