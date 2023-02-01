//JSBasic-ArithmetiCoperators.js

// Phép gán

var a;
var b;

a = b = 1;
b += 1;
a = b = 1;

a = a + 1 + b * 2;
b = (a % 2) + b++ + b;
console.log("Biến A =", a);
console.log("Biến B =", b);

var bunchOfNumber = [a, b];
var bunchOfNumber2 = [b, a];

console.log("Dãy số sau cùng là :", bunchOfNumber - bunchOfNumber2);
