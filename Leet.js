var searchInsert = function(nums=[], target=0) {
    if(nums.includes(target)){
        return nums.indexOf(target)
    }else{
        nums.push(target)
        nums.sort((a,b)=>a-b)
        return nums.indexOf(target)
    }
};

console.log(searchInsert([1,3,5,6],7))