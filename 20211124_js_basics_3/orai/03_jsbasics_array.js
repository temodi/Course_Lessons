// Array (tomb) fv-ek

// Egy változó tömb-e 
let tomb = []

console.log(Array.isArray(tomb))  // true -t add vissza, ha a megadott valtozo az tomb, egyebkent false
if (Array.isArray(tomb)) {
  // igen tomb
}

// .toString() => stringe alakitja a tombot, vesszovel elvalasztva
let allatkak = ['kutya', 'macska', 'luuu'];
console.log(allatkak.toString());

// .concat() => tombok osszefuzese (osszeadasa), egy uj tombot add vissza

let viziAllat = ['capa', 'beka', 'vizilo'];
let szarazfoldiAllat = ['oroszlan', 'tigris']

// console.log(viziAllat.concat(szarazfoldiAllat));
// console.log(szarazfoldiAllat.concat(viziAllat, ['sas', 'golya']));

// .push() => tomb vegehez ad egy v. tobb elemet 
// .pop() => tomb vegerol torol egy elemet, es visszater/visszaadja a torolt elemmel/elemet

let autok = ['bmw', 'trabant', 'opel'];
autok.push('suzik');

console.log(autok)

console.log(autok.pop());
console.log(autok);

// .shift() => tomb elso elemet törli és visszaadja
// .unshift() => tomb elejere beszur egy uj elemet visszater a tomb hosszaval

let bolygok = ['nap', 'merkur', 'mars'];

console.log(bolygok.unshift('fold'))
console.log(bolygok);

console.log(bolygok.shift()); 
console.log(bolygok);

// .reverse() => megforditja az elemek sorrendjet

let abc = ['c','b','d','a'];
console.log(abc);
abc.reverse()
console.log(abc);

let szamok = ['1', '3', '9', '2'];
console.log(szamok);
szamok.reverse();
console.log(szamok)

// .sort() => rendezi az elemeket UTF-16 code szerint

let vegyes = [-1, 2, 1, 123, true, false, '1', 'd', 'c', 'b', 'A', 'a', 'ab', 'P', '!'];
console.log(vegyes)
vegyes.sort()
console.log(vegyes)







