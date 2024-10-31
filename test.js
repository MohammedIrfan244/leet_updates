var singleNonDuplicate = function(nums) {
   for(let i=0;i<nums.length;i++){
    if(nums[i]!==nums[i+1] && nums[i-1]!==nums[i]){
        return nums[i]
    }
   }
};

console.log(singleNonDuplicate([3,3,7,7,10,11,11]));
