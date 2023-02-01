//JSBasic-ArrayMap.js
// Biến đổi 1 tập hợp các phần tử trong mảng thành các phần tử mới.
//
var rectangle = [
  {
    weight: 10,
    height: 5,
  },
  {
    weight: 10,
    height: 20,
  },
  {
    weight: 4,
    height: 16,
  },
];

var areaOfRec = rectangle.map(function (x) {
  return x.weight * x.height;
});

// console.log(areaOfRec);

// Baif taapj : Sua xe: Bien doi danh sach cac xe torng nha kho tro thanh 1 danh sach xe chay duoc va chuyen xe B thanh xe oto, xe C thanh xe may

var vehicles = [
  { vehiclename: "Xe A", type: "Xe tai", status: "Not Ok" },
  { vehiclename: "Xe B", type: "Xe tai", status: "Not Ok" },
  { vehiclename: "Xe C", type: "Xe tai", status: "Not Ok" },
];

console.log("Truoc khi sua : ", vehicles);

var vehiclesDone = vehicles.map(function (vehicle) {
  if (vehicle.vehiclename === "Xe B") {
    vehicle.type = "Xe oto";
  }
  if (vehicle.vehiclename === "Xe C") {
    vehicle.type = "Xe may";
  }
  vehicle.status = "OK";
  return vehicle;
});

console.log(vehiclesDone);
