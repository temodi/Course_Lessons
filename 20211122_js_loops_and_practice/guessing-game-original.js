// [0..100[
// 4 kisebb vagy nagyobb mint a gondolt szam
// amig el nem talalod a szamot amire a gep gondolt

let solution = Math.floor(Math.random() * 10); // [0..99]
let input = Number(prompt("?"));

while (input !== solution) {

	if (input > solution) {
		input = Number(prompt("kisebb szamot kerek"));
	} else {
		input = Number(prompt("nagyobb szamot kerek"));
	}

}

alert('nyertel');