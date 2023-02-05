//JSBasic-ArrayReduce.js
// Cho 1 giỏ hàng, dùng reduce tính tổng giá tiền 1 đơn hàng

var orders = [
  {
    name: "A",
    quantity: 2,
    unitPrice: 100,
  },
  {
    name: "B",
    quantity: 1,
    unitPrice: 400,
  },
  {
    name: "C",
    quantity: 2,
    unitPrice: 15,
  },
  {
    name: "D",
    quantity: 2,
    unitPrice: 15,
  },
];

var totalPriceOfOrder = orders.reduce(function (product1, product2) {
  return product1 + product2.quantity * product2.unitPrice;
}, 0);

//console.log(totalPriceOfOrder);

// Dunfg Map để đưa 1 chuỗi các ký tự thành có dấu ngoặc nhọn ở đầu :
var items = ["Thang", "Khanh", "Khang", "asd"];

var result = items.map(function (item) {
  return "<" + item + ">";
});

console.log(result);
