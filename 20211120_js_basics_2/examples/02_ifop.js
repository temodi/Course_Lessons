let fullName = "Kiss Jolan";

if (fullName == "Kiss Jolan") {
  window.alert("Szia Jolan")
}

let szam = 13;
if (szam > 13) {
  // lefut az ag szam valobban nagyobbb mint 13
}
if (szam < 13) {
  // lefut ha a szam kisebb mint 13
}
if (szam <= 13) {
  // ha szam kisebb vagy egyenlo 13, akkor fut le
}
if (szam >= 13) {
  // ha a szam nagyobb v. egyenlo 13
}
if (szam != 13) {
  // ez minden csak 13, akkor fut le
}

if (szam * szam > 13) {
 // lefut ha szam negyzete nagyobb mint 13
}

// logikai operatorok 
// VAGY / OR / ||
let ertek1 = false;
let ertek2 = true;

if (ertek1 || ertek2) {
  // ha az ertek1 true vagy az ertek2 true, akkor lefut
}
if (false || false || true) { // =>  elso true, ugyhogy igaz
   
}
if (false || false || false) { // =>  utolso false => hamis lesz

}

// ÉS / AND / && 
if (ertek1 && ertek2) {
    // ertek1 es ertek2 is igaz, akkor lesz igaz
}

let kategoria1 = 'Elektronika';
let kategoria2 = 'TV';
if (kategoria1 == 'Elektronika' && kategoria2 == 'TV') {
  // mondjuk megfelel mindket kategorianak, megjelenitjuk a megfelelo html-t
}

let kategoria3 = 'Elektronika';
let kategoria4 = 'Mosogep';
if (kategoria3 == 'Elektronika' && kategoria4 == 'TV') {
  // jelenlegi valtozo ertekek mellett ez nem fog lefutni
  // mondjuk megfelel mindket kategorianak, megjelenitjuk a megfelelo html-t
}

// Logikai nem / NOT / ! (jobbrol balra)
let ezMostTrue = true;
if (!ezMostTrue) {  // = true -> !true -> false

}

let ezMostFalse = false;
console.log(!ezMostFalse) // -> false -> !false -> true

// de morgan azzonossag
// 1. -> nem (a és b) => (nem a) vagy (nem b) 
// 2. -> nem (a vagy b) => (nem a) és (nem b)
let a = true;
let b = true;

if (!(a && b)) {
  // a true
  // b true 
  // a AND b -> true
  // !true -> false
}
// 1.
console.log(!(a && b) == (!a) || (!b))
// 2.
console.log(!(a || b) == ((!a) && (!b)))
