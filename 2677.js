

let chunk =function(arr,size){

    let start=0 
    let end=size
    let temp=[]

    while (start<arr.length){
        
        if(end >arr.length){
            end=arr.length
        }
        let temp2=[]
        for(let i=start;i<end;i++){
            temp2=arr[i]


        }
        temp.push=[temp2]
        start=end 
        end=end+end
    }
    return temp
    
}


let arr=[1,2,3,4,5]

arr.slice

let size=1

let obj={"name":"1"}
console.log(
obj.id)


console.log(chunk(arr,size))