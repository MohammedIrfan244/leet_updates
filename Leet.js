var isZeroArray = function(nums, q) {
   let refArr = Array.from({length:nums.length+1}).fill(0)
   for([l,r] of q){
       refArr[l] +=1
       refArr[r+1] -=1
   }
   let acc=0
   for ( let i =0 ;i<nums.length;i++){
       acc+=refArr[i]
       if(acc<nums[i]) return false
   }
   return true
};