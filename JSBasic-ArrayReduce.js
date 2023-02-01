//JSBasic-ArrayReduce.js
// Cho 1 giỏ hàng, dùng reduce tính tổng giá tiền 1 đơn hàng

var order = [
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
];

var priceOrders = order.map(function (or) {
  return or.quantity * or.unitPrice;
});
var totalPriceOfOrder = priceOrders.reduce(function (product1, product2) {
  return product1 + product2;
});

console.log(totalPriceOfOrder);
