//
// Stringek
//
let str = "string";
str.length;
str[0]; // => s
str[1]; // => t
str[2] = 'k'; // stking

let hi = 'Hi';
hi = 'h' + hi[1]; // => hi

// str.slice(start [, end]): Returns the part of the string from start to (but not including) end.
let str = "stringify";
str.slice(0, 5) // => strin
str.slice(0, 1) // => s
str.slice(-4, -1) // => gif
// str.substring(start [, end]): Returns the part of the string between start and end.
str.substring(0, 5) // => string
str.substring(0, 1) // => st
// str.substr(start [, length]): Returns the part of the string from start, with the given length.
str.substr(2, 4) // => ring
str.substr(-4, 3) // => gif

//
// Tombbol torles
//
let arr = ["I", "go", "home"];
delete arr[1]; // => -go => ["I", undefined, "home"]

// arr.splice(start[, deleteCount, elem1, ... elemN])
arr.splice(1, 1); // => ["I", "home"]

// arr.slice()

//
// Objektumok
//
let obj = {}; // "object literal" syntax
obj.name = 'Oliver';

let objInit = { name: 'Oliver' };

let person = {  // object
  name: 'Dzseni', // key "name", value "Dzseni",
  age: 10, // key "age", value 10,
  'likes birds': true
}
person.name;
delete person.age; // => { name: 'Dzseni' }
person['likes birds'];
person['name']
person['age']

let key = 'age';
person[key] // => person.age || person['age']

let personArray = ['Dzseni', 10];
personArray[0] // => 'Dzseni'
personArray[1] // => 10

//
//
//
let dzseni = { name: 'Dzseni', likesBirds: true };
let adam = { name: 'Adam', likesBirds: false };
let emberek = [dzseni, adam, { name: 'Peti', likesBirds: true }];
dzseni.name = 'nem dzseni';
emberek[0] // => { name: 'Dzseni', likesBirds: true }
emberek[0].name === 'Dzseni' // => true
emberek[0].likesBirds

emberek[1] // => { name: 'Adam', likesBirds: false }
emberek[1].name
emberek[1].likesBirds

emberek[2] // => { name: 'Peti', likesBirds: true }
emberek[2].name
emberek[2].likesBirds