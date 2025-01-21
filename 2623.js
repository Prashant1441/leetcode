function memoize(fn) {
    let cache= new Map()
    return function(...args) {
        if(args.length!==0){
        const key= JSON.stringify(args)
        
        if(cache.has(key)){
            return cache.get(key)
        }

        const result=fn(...args)
        cache.set(key,result)
        return result}
        return callCount
   
}
}
  let callCount = 0;
  const memoizedFn = memoize(function (a, b) {
 	 callCount += 1;
    return a + b;
  })
  console.log(memoizedFn(2, 3)) // 5
  console.log(memoizedFn(2, 3)) // 5
  console.log(memoizedFn(1,5))
  console.log(memoizedFn(2,3))
  console.log(memoizedFn())
  
 

