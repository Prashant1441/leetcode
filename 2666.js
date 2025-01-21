let once = function(fn) {
        const value=0
    return function(...args){
    
        value= fn(...args)
        return value
    
};
}

  let fn = (a,b,c) => (a + b + c)
  let onceFn = once(fn)
 
  console.log(onceFn(1, 2, 3)); // 6
 // onceFn(2, 3, 6); // 6
  console.log(onceFn(5,7,9))
  