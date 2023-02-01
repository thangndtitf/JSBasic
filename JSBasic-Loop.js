//JSBasic-Loop.js

// for (var i = 0; i <= 10; i++) {
//   console.log(i);
// }

var employees = [
  {
    name: "Nguyen",
    age: 20,
  },
  {
    name: "Thang",
    age: 22,
  },
  {
    name: "Nam",
    age: 40,
  },
];
console.log(employees.length);
for (var i = 0; i < employees.length; i++) {
  console.log(employees[i].name, employees[i].age, i);
}
console.log("============");
for (var employee of employees) {
  console.log(employee.name, employee.age);
}

console.log("============");

var myDog = {
  weight: 5,
  name: "Ngu",
  bark: function () {
    console.log("Gâu gâu . My name is", this.name);
    return this;
  },
  eat: function (bone) {
    this.weight = this.weight + bone.weight;
    return this;
  },
  age: 5,
};

for (var key in myDog) {
  console.log(key, myDog[key]);
}
