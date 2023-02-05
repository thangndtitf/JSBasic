//JSBasic-SortArray.js

var numbers = [0, 12, 1, 57, 1213.12, 124, 556, 1213.09, 0];

var accendingNumbers = numbers.sort(function (number1, number2) {
  return number1 - number2;
});

//console.log(accendingNumbers);

var deAccendingNumbers = numbers.sort(function (number1, number2) {
  return number2 - number1;
});

//console.log(deAccendingNumbers);

// Bài tập : Cho 1 danh sách các nhân viên  tuổi của các nhân viên. Sắp xếp các nhân viên theo thứ tự :
// 1. Từ trẻ tới già
// 2. Từ già tới trẻ

var employees = [
  { name: "Thắng", age: 23 },
  { name: "Khanh", age: 22 },
  { name: "Huyền", age: 19 },
  { name: "Tư", age: 18 },
  { name: "Khánh", age: 50 },
];

var accendingEmployees = employees.sort(function (emp1, emp2) {
  return emp1.age - emp2.age;
});

//console.log(accendingEmployees);

var deAccendingEmployees = employees.sort(function (emp1, emp2) {
  return emp2.age - emp1.age;
});

//console.log(deAccendingEmployees);

// Bài tập 2 : Cho 1 danh sách các sản phẩm bao gồm giá , tên của sản phẩm , tồn kho của sản phẩm
// Sắp xếp danh sách các sản phẩm theo thứ tự :
// 1. Tổng giá tiền từ thấpp đến cao
// 2. Tôgnr giá tiền từ cao đến thấp

var products = [
  { name: "máy giặt", price: 100000, currentStock: 10 },
  { name: "máy sáy tóc", price: 60000, currentStock: 12 },
  { name: "tủ lạnh", price: 200000, currentStock: 50 },
  { name: "tàu vũ trụ", price: 1000000, currentStock: 3 },
  { name: "xe oto", price: 800000, currentStock: -1 },
];

var accendingProducts = products.sort(function (product1, product2) {
  console.log(product1.currentStock * product1.price);
  return (
    product1.currentStock * product1.price -
    product2.currentStock * product2.price
  );
});

console.log(accendingProducts);
