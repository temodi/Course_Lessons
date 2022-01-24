function hello() {}

const foo = function () {
	console.log('foo');
};

const bar = () => {
	console.log('bar');
};

const barRoviden = () => console.log('barRoviden');

const sum = function (a, b) {
	return a + b;
};

const sum2 = (a, b) => {
	return a + b;
};

// Ha nincs bajusz, akkor automatikusan visszater a kifejezes ertekevel.
const sum3 = (a, b) => a + b;

const double = function (a) {
	return a * 2;
};

// Elhagyhato az parameter lista zarojel, ha csak egy parameter van
const double2 = (a) => a * 2;

const double3 = a => a * 2;

[1, 2, 3, 4].forEach(n => console.log(n * 2));

[1, 2, 3, 4].forEach(function (n) { console.log(n * 2); });