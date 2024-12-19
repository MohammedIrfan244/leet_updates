var countDistinctIntegers = function (nums = []) {
  const unique = new Set(nums);
  for (let i = 0; i < nums.length; i++) {
    const reversed = Number(String(nums[i]).split("").reverse().join(""));
    unique.add(reversed);
  }
  return unique.size;
};

console.log(countDistinctIntegers([1, 13, 10, 12, 31]));
