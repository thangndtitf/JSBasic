//node-bult-in-module/NodeModule.js

var fs = require("fs");
var text = fs.readFileSync("node-bult-in-module/Hello.txt", {
  encoding: "utf-8",
});
fs.writeFileSync("node-bult-in-module/Hello2.txt", "Hello World2");
console.log(text);
