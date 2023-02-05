//JSBasic-ArrayReal.js

// Cho 1 danh sách các phần tử là các nhân viên trong 1 công ty.
// KHi người dùng nhập vào giới tính của nhân viên ==> Xuất ra danh sách nhân viên có giowis tính mà người dùng
// chọn

var employees = [
  {
    name: "Thang",
    age: 23,
    gender: "male",
  },
  {
    name: "Khanh",
    age: 20,
    gender: "feMale",
  },
  {
    name: "Ngan",
    age: 25,
    gender: "feMale",
  },
  {
    name: "Khang",
    age: 26,
    gender: "male",
  },
];

var genderSearch = -12; // 1 la nam, 2 la nu, 3 la all

var searchEmployeeFromGen = function (gender, employee) {
  var searchEmployee = [];
  if (gender === 1) {
    searchEmployee = employee.filter(function (emp) {
      if (emp.gender === "male") {
        return emp;
      }
    });
  } else if (gender === 2) {
    searchEmployee = employee.filter(function (emp) {
      if (emp.gender === "feMale") {
        return emp;
      }
    });
  } else {
    searchEmployee = employee;
  }

  return searchEmployee;
};

console.log(searchEmployeeFromGen(genderSearch, employees));


// ============

// Bài tập luyện cho các Array methods

