//closure
function returned with its lexical environment is called closure

// function statement && // function Declaration
function a(){
}

// function Expression
var i = function (){
}
// anonymous function
function (){
}

// named function expression
var i = function a(){
}
// difference  between parameters and arguments
function a(x, y){ //here x & y are the parameters
  console.log(x,y);
}
a(2,3); //here 2 & 3 are the arguments
// first class functions
console.log("The ability to use functions inside a function and pass them as parameters and arguments.");
// arrow function
var x = () => {
}

//callback functions
function inside the function parameter
setTimeout(function(){
  console.log("timer");
}

//blocking the thread
when we block the call stack with a function that takes a lot of time to execut. to avoid such things we should use async function

