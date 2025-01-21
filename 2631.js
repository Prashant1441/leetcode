






array = [
    {"id":"1"},
    {"id":"1"},
    {"id":"2"}
  ], 
  

  temp={}

  array.forEach((item)=>{
    fn = function (item) { 
        return item.id; }
   const id=fn(item)
    
  
        if(!temp[id]){
            temp[id]=[]
        }
    temp[id].push(item)


})

console.log(temp)