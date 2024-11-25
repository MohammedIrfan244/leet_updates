var removeElement = function (nums = [], val) {
  if (!nums.includes(val)) return nums.length;

  for (let i = 0; i < nums.length; i++) {
    if (!nums.includes(val)) {
      nums.sort((a, b) => a - b);
      return nums.slice(0, nums.indexOf(Infinity)).length;
    }
    if (nums[i] !== val) continue;
    if (nums[i] == val) {
      nums[i] = Infinity;
    }
  }
  nums.sort((a, b) => a - b);
  return nums.slice(0, nums.indexOf(Infinity)).length;
};

console.log(removeElement([4, 5], 4));
