var sortArrayByParity = function(nums=[]) {
    return nums.filter(i=>i%2==0).concat(nums.filter(i=>i%2!==0))
};

console.log(sortArrayByParity([0]))