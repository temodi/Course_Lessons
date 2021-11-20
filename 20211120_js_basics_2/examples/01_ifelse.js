
/* let open = false;

if (open)  
  window.alert("Nyitva");
else 
  window.alert("Zarva"); */

/* 1 igaz ág */
let feltetel = false;
// window.alert('feltetel elott');
if (feltetel) {
  // ha a feltetel igaz, lefut ez a kod is
  // window.alert('feltetel miatt');
}
// window.alert('feltetle utan');

/* 1 igaz 1 hamis ág */
let ujfeltetel = true;
if (ujfeltetel) {
  // lefut ha ujfeltetel igaz
} else {
  // lefut ha a feltetel nem igaz  
}

/* tobb igaz ág */
let feltetel1 = true;
let feltetel2 = true;
let feltetel3 = false;

if (feltetel1) {
    // lefut a kod, ha feltetel1 igaz
} else if (feltetel2) {
   // lefut a kod, ha feltetel1 nem igaz és a feltetel2 igaz
} else if (feltetel3) {
   // lefut a kod, ha feltetel1 es feltetel2 hamis es feltetel3 igaz
} else {
  // lefut ha egyik feltetel sem igaz
}

// utasitas 2
// Innen folyt.

/*
let year = prompt('Koszonj szepen', ''); // prompt stringet ad vissza

if (year == "Hello") {    // year == "Hello" => logikaira -> true lesz, ha year = 'Hello'
	alert( 'Neked is hello' );
}
else {
	alert( 'Nem szep koszones :(' );
}

alert('Folytatodik a kodunk'); */

let kifejezes = '';
switch (kifejezes) {
  case 'ertek1':
    // utasitasok
    break; // <= kiugrik a blokbol es tudja folytatni az eredeti kodfutatast
  case 'ertek2':
    // utasitasok
    break;
  default:
    // ha nem taltal megfelelo case ágat, akkor ez fut le
}

let szin = window.prompt("Melyik a kedvenc szined ?");

switch (szin) {
  case 'voros':
  case 'piros': 
    window.alert('Piros lett kivalasztva');
    break;
  case 'kek': 
    window.alert('Kek lett kivalasztva');
    break;
  default:
    window.alert("nincs szin olyan szin");
} 


