//JSBasic-Ex.js

var nums = [1, 2, 7, 8];

var target = 9;

var twoSum = function (nums, target) {
  var result = nums.reduce(function (index) {
    if (nums[index] + nums[index + 1] === target) {
      return 1;
    }
  });
  return result;
};

console.log(twoSum());
