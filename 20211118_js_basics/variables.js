
let valtozo_neve = 1234; /* deklaralva van egy valtozo kezdo ertekkel, Number */

/* CamelCase */
let valtozoNeve = 1234; /* ez egy teljesen uj valtozo */
let valtozo_masik = 1;

console.log(valtozo_neve);
/* ertekado operator */
valtozo_neve = 345;
console.log(valtozo_neve);

/* osszeadas es kivonas */
valtozo_neve = 213 + 189;
console.log(valtozo_neve);
valtozo_neve = 200 - 1000;
console.log(valtozo_neve);

valtozo_masik = valtozo_neve;
console.log(valtozo_masik);

/* szorzas /  osztas */
valtozo_neve = 3 * 2;
console.log(valtozo_neve);
valtozo_neve = 10 / 5;
console.log(valtozo_neve);

/* maradek */
valtozo_neve = 10 % 3;
console.log(valtozo_neve);

/* elojelek: + , - */
valtozo_neve = +10;
valtozo_neve = 10;
valtozo_neve = -10;
console.log(valtozo_neve);

/* csoportositas, zarojelezes */

valtozo_neve = (3 + 2);
console.log(valtozo_neve);

valtozo_neve = 3 + 2 * 5;
console.log(valtozo_neve);
valtozo_neve = (3 + 2) * 5;
console.log(valtozo_neve);

/* muveletek valtozoval */
let oszlop = 2;
let sor = 3;
let cellak_szama = 0;

cellak_szama = oszlop * sor;  /* cellak_szama = 2 * 3 */
window.alert(cellak_szama);

/* valtozok ertekenk csereje */
let a = 5;
let b = 10;
let ideiglenes = 0;

ideiglenes = a; /* ideiglenes = 5 */
a = b; /* a = 10 */
b = ideiglenes; /* b = 5 */


