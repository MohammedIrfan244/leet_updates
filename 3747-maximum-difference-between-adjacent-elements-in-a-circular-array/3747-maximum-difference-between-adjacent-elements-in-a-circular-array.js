/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    let diff=0
    const l=nums.length-1
    for(let i=0;i<nums.length;i++){
        if(i==l){
            let abs = Math.abs(nums[l]-nums[0])
            abs>diff?diff=abs:null
        }else{
            let abs=Math.abs(nums[i]-nums[i+1])
            abs>diff?diff=abs:null
        }
    }
    return diff
};