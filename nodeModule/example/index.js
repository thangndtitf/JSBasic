//.load nodeModule/example/index.js
// node module

var Mouse = require("./nodeModule/example/Mouse.js");

function Cat() {
  this.stomatch = [];
}

Cat.prototype.eat = function (mouse) {
  this.stomatch.push(mouse);
  mouse.die();
};

var mickey = new Mouse("black");
var jerry = new Mouse("orange");
var tom = new Cat();
tom.eat(mickey);

console.log(mickey);
console.log(jerry);
console.log(tom);
