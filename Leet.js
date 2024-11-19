var maximumSubarraySum = function (nums = [], k = 0) {
  if (nums.length < k || k == 0) {
    return 0
  }

  let check = []
  for (let i = 0; i <= nums.length - k; i++) {
    const subarray = nums.slice(i, i + k)
    if (subarray.length === new Set(subarray).size) {
      check.push(subarray.reduce((acc, cur) => acc + cur, 0))
    }
  }
  if (check.length === 0) {
    return 0
  }
  return Math.max(...check)
};

console.log(maximumSubarraySum([1, 1, 1, 7, 8, 9], 3))
