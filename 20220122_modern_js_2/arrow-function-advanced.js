//
// Nem erheto el az arguments object
//

function foo() {
	console.log(arguments);
}

foo(1, 2, 3, 4, 5, 6, 7, 8, 9);

function sumAll() {
	let sum = 0;
	for (let i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
}

console.log(sumAll(1, 2, 3, 4, 5));

// Van helyette spread operator
const sumAll2 = (...rest) => {
	console.log(rest);
	let sum = 0;
	for (let i = 0; i < rest.length; i++) {
		sum += rest[i];
	}
	return sum;
};

console.log(sumAll2(1, 2, 3, 4, 5, 6));

//
// Arrow functionnek nincs sajat scopeja
//
let student = {
	name: 'Oliver',
	age: 32,
	hobbies: ['swimming','snooker', 'darts', 'sleep'],

	log() {
    // this -> student
		this.hobbies.forEach(function (hobby) {
      // this -> window
			console.log(`${this.name}'s hobby: ${hobby}`);
		});
	},

	log2() {
    // this -> student
		this.hobbies.forEach((hobby) => {
      // this -> student
      // mert nem csinal function scopeot az arrow function
			console.log(`${this.name}'s hobby: ${hobby}`);
		});
	},

	log3() {
		this.hobbies.forEach(function (hobby) {
      // ha nem bindoltunk volna akkor a
      // this.name a window.name-et keresne nem a student.name-et
			console.log(`${this.name}'s hobby: ${hobby}`);
		}.bind(this)); // <- scope binding
	},


	log4() {
		const self = this; // <- scope alias
		this.hobbies.forEach(function (hobby) {
			console.log(`${self.name}'s hobby: ${hobby}`);
		});
	},
};

student.log();
student.log2();

//
// nincs new operator
//

// Ez nem mukodik:
// let myObj = () => {};
// new myObj();

function myOtherObject(a) {
	this.name = a;
}
const peldany = new myOtherObject('Oliver');
console.log(peldany.name);

class myOtherObjectClass {
	constructor(a) {
		this.name = a;
	}

	foo() {}
}
const wut = new myOtherObjectClass('Oliver');
console.log(wut.name);