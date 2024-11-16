var resultsArray = function (nums, k) {
  let res = [];
  let test = [];
  let flag = true;
  if (nums.length == 1) {
    return nums;
  }
  if (nums.length <= k) {
    return [Math.max(...nums)];
  }
  for (let i = 0; i < nums.length - (k - 1); i++) {
    test = [];
    for (let j = i; j < i + k; j++) {
      test.push(nums[j]);
    }
    let uniq = [...new Set(test)];
    if (uniq.length !== test.length) {
      res.push(-1);
    } else {
      flag = true;
      for (let x = 0; x < uniq.length; x++) {
        if (x != uniq.length - 1) {
          if (test[x + 1] - test[x] !== 1) {
            flag = false;
            break;
          }
        }
        if (uniq[x] !== test[x]) {
          flag = false;
          break;
        }
      }
      flag ? res.push(Math.max(...test)) : res.push(-1);
    }
  }
  return res;
};
console.log(resultsArray([1], 1));
