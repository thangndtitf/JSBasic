// JSBasic-ArrayMethod.js

// Concat

var a = [1, 4, 5, 6];
var b = [10, 12, 15, 5, 6];

var c = a.concat(b);
// console.log("A: ", a);
// console.log("B :", b);
// console.log("C :", c);

// push đưa 1 phần tử mới vào cuối mãng được push

// console.log(a.push(b));
// console.log("A after push: ", a);

// //pop Đẩy phần tử ở cuối mãng này ra

// console.log(a.pop());
// console.log(a);

// shift lay phan tu dau tien ra khoi mang return lai tra ve phan tu dau tien, unshift dua phan tu vaof dau mang, unshift return lenght moi cua mang
console.log(a.shift());
console.log(a);
console.log(a.unshift(200));
console.log(a);
