//JSBasic-ObjectMethod.js

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
};

var bone = {
  weight: 0.5,
};
console.log("Before eating", myDog.weight);
myDog.eat(bone);
console.log("After eating : ", myDog.weight);
