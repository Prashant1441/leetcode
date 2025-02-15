
nums =
[0,1,2,2,3,0,4,2]

let removeElement = function(nums, val) {


    return nums.filter((item)=>( item!=val))  
  };

console.log(removeElement(nums,2))