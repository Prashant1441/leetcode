


words = ["aba","bcb","ece","aa","e"]

queries = [[0,2],[1,4],[1,1]]
    const newMap=new Map([])
    words.filter ((item)=>{
        if('aeiou'.includes(item[0].toLowerCase())
           && 'aeiou'.includes(item[item.length-1].toLowerCase())){
            newMap.set(words.indexOf(item),true)
        }
        else {
            newMap.set(words.indexOf(item),false)
        }


    })
    console.log(newMap)


const result=[]

queries.forEach(item => {
    let count=0
    for(let i=item[0];i<=item[1];i++){
        if(newMap.get(i)==true){
            count=count +1
        }
    }
    
    result.push(count)
    count=0
})

const variables = words.filter((item)=>

    ('aeiou'.includes(item[0].toLowerCase())
        && 'aeiou'.includes(item[item.length-1].toLowerCase()))
    )

console.log(variables)



