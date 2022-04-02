// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer

// 3 fele mod string object kulcs beallitasra
// mind string kulcsot csinal
console.log({ key: "value" });
console.log({ "key": "value" });
console.log({ ["key"]: "value" }); // Computed property names (ES2015)


const foo = "hello en leszek a key";
const obj2 = { [foo]: "value" };

console.log(obj2)
console.log({ [Math.random()]: "random" })

const newPass = 'alma';
const prevState = {username: '', pass: ''};

const nextState = {
	username: prevState.username,
	pass: newPass
};

prevState.pass = newPass

// Object spread lemasolja az eredeti objectet
{
	...prevState
}

// Ez lesz belole =>

{
	username: prevState.username,
	pass: prevState.pass,
}

// Igy lehet felulirni a spreadet

{
	...prevState,
	pass: newPass
}

// ez lesz belole =>

{
	username: prevState.username,
	pass: prevState.pass,
	pass: newPass, // <= felulirja az elozo pass-t (igazabol nem lesz ketszer ugyan az a kulcs egy objecten)
	ujKey: ""
}

// https://reactjs.org/docs/react-component.html#setstate