var rearrangeArray = function (nums = []) {
  let res = [];
  let even = 0;
  let odd = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res[even] = nums[i];
      even += 2;
    } else {
      res[odd] = nums[i];
      odd += 2;
    }
  }
  return res;
};

console.log(rearrangeArray([-1, 1]));
