//JSBasic-callBack.js
//JS có thể sử dụng 1 function, truyền function đó vào 1 function khác theo dạng parameter được.

var makeCoffe = {
  makeCoffe: function (onFinish) {
    console.log("MakingCoffe ...");
    onFinish(countTimeFinish);
  },
};

var reng = function (timeFinish) {
  console.log("Tít Tít Tít Tít...");
  console.log(" Máy pha cf sẽ hoàn thành trong : ", timeFinish());
};

var countTimeFinish = function () {
  return 1 + 1;
};

console.log(makeCoffe.makeCoffe(reng));
