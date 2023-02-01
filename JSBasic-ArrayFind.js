//JSBasic-ArrayFind.js
// dùng để tìm ra được phần tử giống với điều kiện tìm kiếm có số thứ tự cao nhất

var bunchOfNumber = [1, 5, 123, 613, 7, 7, 2354346, 0];

var searchNumber = bunchOfNumber.find(function (number) {
  if (number % 2 === 0) {
    console.log(number);
    return number;
  }
});

console.log(searchNumber);
