//JSBasic-ArrayFilter.js
// Dùng để lọc các phần tử của mãng
// Cho 1 danh sách các nhân viên thuộc các phòng ban : GHLD, Bảo hành. Tạo 1 bộ lọc để cho ra danh sách các NV thuộc BP GHLD

var elements = [
  {
    elName: "Thang",
    elAge: 21,
    elUser: "162880",
    elDepartment: "GHLD",
  },
  {
    elName: "Khanh",
    elAge: 22,
    elUser: "1629879",
    elDepartment: "Bảo hành",
  },
  {
    elName: "Nguyen",
    elAge: 23,
    elUser: "12893",
    elDepartment: "GHLD",
  },
  {
    elName: "Tran",
    elAge: 14,
    elUser: "120978",
    elDepartment: "Bảo hành",
  },
  {
    elName: "Khang ",
    elAge: 26,
    elUser: "123123",
    elDepartment: "Bảo hành",
  },
];

var bunchOfElements = elements.filter(function (element) {
  if (element.elDepartment === "GHLD") return element;
});

console.log(bunchOfElements);
