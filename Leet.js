var findMaxK = function (nums = []) {
  nums.sort((a, b) => a - b);
  let max = -Infinity;
  let left = 0;
  right = nums.length - 1;
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum == 0) {
      max = Math.max(max, nums[right]);
      left++;
      right--;
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
  return max==-Infinity?-1:max;
};

console.log(findMaxK([-10,8,6,7,-2,-3]));
