/*
    Array :
*/

var evenNumber = [2, 4, 6];
// index          0   1  2
// length : 3

// Ví dụ : khai báo 1 mảng gồm 3 con chó

var dog1 = {
  type: "Chó ta",
};

var dog2 = {
  type: "chó lạp xưởng",
};

var dog3 = {
  type: "chó husky",
  name: "Ngu",
};

var bunchOfDog = [dog1, dog2, dog3];
//console.log(bunchOfDog[2].name);

var dog4 = {
  type: "Shiba",
};
bunchOfDog[0] = dog4;
//console.log(bunchOfDog);

// Baif tapaj : Tao danh sach nhan vien cua minh duoi dang Array cua cac object

var empolyee1 = {
  name: "Le Hoang Vu ",
  dob: "20-02",
  gender: "male",
};

var empolyee2 = {
  name: "Nguyen Van Phan",
  dob: "25-12",
  gender: "male",
};
var empolyee3 = {
  name: "Tran Thi Mi ",
  dob: "undefined",
  gender: "female",
};
var empolyee4 = {
  name: "Vo Minh Hieu",
  dob: "20-02",
  gender: "male",
};

var listOfEmployee = [empolyee1, empolyee2, empolyee3, empolyee4];

console.log(listOfEmployee);
