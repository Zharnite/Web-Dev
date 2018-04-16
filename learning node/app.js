//directory name
console.log(__dirname);

//file name
console.log(__filename);

//normal function statement
function sayHi() {
  console.log('hi');
}
sayHi();

//function expression
var sayBye = function(){
  console.log('bye');
};
sayBye();

function callFunction(fun) {
  fun();
}

callFunction(sayBye);
