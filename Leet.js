var findTargetSumWays = function(nums=[], target=0) {
    nums.sort((a,b)=>b-a)
    let sum=nums[0]
    let cct=`+${nums[0]}`
    for(let i=1;i<nums.length;i++){
      if(sum>target){
        sum-=nums[i]
        cct+=`-${nums[i]}`
      }else{
        sum+=nums[i]
        cct+=`+${nums[i]}`
      }
    }
    return cct
};

console.log(findTargetSumWays([1],1))
