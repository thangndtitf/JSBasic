//JSBasic-Prototype.js

var Mouse = function (mouseName, mouseWeight) {
  this.name = mouseName;
  this.weight = mouseWeight;
};

Mouse.prototype.eating = function () {
  console.log("Good Food");
};

var jerry = new Mouse("jerr", 25);
var mickey = new Mouse("Mick", 12);

console.log(jerry.eating() === mickey.eating());
