// Referencia

// Primitiv 
let a = 1; 
let sz = 'szoveg';
let b = true;  

// Osszetett

let tomb1 = [1, 2, 3]
let tomb2 = tomb1;

console.log(tomb1);
console.log(tomb2);

tomb2.push(4);

console.log(tomb1);
console.log(tomb2);


// obj

let obj1 = {
    nev: 'Pistike',
    szulev: 1730,
}

let obj2 = obj1;

console.log(obj1);
console.log(obj2);

obj2.nev = 'Moricka';

console.log(obj1);
console.log(obj2);

obj1 == obj2;  // true, de nem azert mert ugyan azokat a propertyket tartalmazza, hanem hanem ugyan arra memoria területre mutat



let aa = 1;
let tomb_1 = [1,2,3]

console.log(aa)
console.log(tomb_1);

// előfordito szempontjabol igy nez ki valahogy

// a = 1
// tomb_1 = <@0001>
// Memoria: @001 ->  @001 : [1,2,3]
// 
// console.log(1)
// console.log(<@001>) => [1, 2 3 ] // elkezd futni a program, ekkor errol a memoria címről lekéri a [1,2,3] adatot

let tomb_2 = tomb_1; // tomb1 es tomb2 == <@0001> => [1, 2 ,3]


// Tomb masolsra => .concat() => uj tombot hoz letre

let allatok = ['kutya', 'macska'];
let allatokMentesTomb;

allatokMentesTomb = allatok.concat([]);

console.log(allatok);
console.log(allatokMentesTomb);

allatok.push('papagaj');

console.log(allatok);
console.log(allatokMentesTomb);


// Objektum masolas
let szemely1 = {
   nev: 'Kati',
   lakhelye: 'Pecs',
}

let szemely2;

szemely2 = Object.assign({}, szemely1);

console.log(szemely1);
console.log(szemely2);

szemely1.nev = 'Judit';

console.log(szemely1);
console.log(szemely2);

