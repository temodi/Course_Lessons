// Function definition and invocation
function speak(string) {
  console.log(string);
}
speak("Hello");                     // logs "Hello"

// Store in a variable
let talk = speak;
talk("Hi");                         // logs "Hi"

// Pass as an argument to a function
// Return from a function
function functionReturner(fn) {
  return fn;
}
let chat = functionReturner(talk);
chat("Good Morning");               // logs "Good Morning"

// Store in a data structure
let myFuncs = [talk];
myFuncs[0]("Good Afternoon");       // logs "Good Afternoon"

// LAAATER
// Owns properties
talk.myProperty = "bananas";
console.log(talk.myProperty);       // logs "bananas"

// Ez lett belole az oran
function sayHi() {
  console.log("hy");
}

let func = sayHi;

sayHi()
func()

function sayHi2() {
  return function () { // anonymus function
      console.log('igaziSayHy');
  }
}

let majdMondjaHaMeghivom = sayHi2();
majdMondjaHaMeghivom();


function functionReturner(mitMondjon) {
return function () { // anonymus function
   console.log(mitMondjon); // scope miatt latja a valtozot
}
}
let monddHogyHello = functionReturner('hello');
monddHogyHello();

let monddHogyHi = functionReturner('Hi');
monddHogyHi();

// sayHi3();
//
//
// Function expression
let sayHi3 = function () {
  console.log('sayHi3')
}

// Function declaration
// function sayHi3() {
//     console.log('sayHi3')
// }

function addOneToNumber(szam) { return szam + 1 }

function addOne(array) {
let newArray = [];

for (let i = 0; i < array.length; i++) {
  newArray.push(addOneToNumber(array[i]));
}

return newArray;
}

function map(array, callback) {
let newArray = [];

for (let i = 0; i < array.length; i++) {
    let aktualisSzam = array[i];
    newArray.push(callback(aktualisSzam));
}

return newArray;
}

// addOne
console.log(
  map([1,2,3], function (szam) { return szam + 1 })
)

// addTwo
console.log(
  map([1,2,3], function (szam) { return szam + 2 })
)

function addThree(szam) {
  return szam + 3;
}

// addThree
console.log(
  map([4,5,6], addThree)
)

// Array.map([10,11,12], addThree);
console.log([10,11,12].map(addThree));