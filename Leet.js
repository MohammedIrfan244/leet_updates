var majorityElement = function(nums=[]) {
    
    for (let i=0;i<nums.length;i++){
        let occ=0
        for(let k=0;k<nums.length;k++){
            if(nums[i]==nums[k]){
                occ+=1
            }   
            if(occ>=nums.length/2){
            return nums[i]
           }
        }
        
    }
};

console.log(majorityElement([2,2,1,1,1,2,2]))