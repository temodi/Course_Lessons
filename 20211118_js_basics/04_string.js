
let szoveges_valtozo = "Hello World"; /* String tipus */
console.log(szoveges_valtozo)

let karakter = "A";
let szoveg_ez_is = 'Ez is szoveg';

/* egy karakter kiiaratasa */
console.log(szoveges_valtozo.charAt(0));
console.log(szoveges_valtozo[0]);

let elso_karakter = szoveges_valtozo[0];
console.log(elso_karakter);

/* 2 vagy tobb osszeadas */
let gyumolcs1 = "Alma";
let gyumolcs2 = "Korte";

let gyumolcsok = gyumolcs1 + gyumolcs2;

/* gyumlcsok <--- "Alma" + "Korte" */
console.log(gyumolcsok);
console.log(gyumolcs1+" "+gyumolcs2);

/* String hossza */
// console.log(gyumolcs1.length);
// console.log(gyumolcs2.length);
// console.log(gyumolcsok.length);
// console.log("Hello world".length);

let hosszu_szoveg = "orem Ipsum is simply dummy text of" +
"the printing and typesetting industry." +
"Lorem Ipsum has been the industry's standard dummy text ever" +
"since the 1500s, when an unknown printer took a galley";

console.log(hosszu_szoveg.length);

let hosszu_szoveg2 = "orem Ipsum is simply dummy text of \
the printing and typesetting industry. \
since the 1500s, when an unknown printer took a galley";

console.log(hosszu_szoveg2.length);


/* Tipus konverzio string alakitok számmá */

let szoveg_szam1 = "23";
let szoveg_szam2 = "5";
let vegeredmeny_szam = 0;
let vegeredmeny_szam_parsolva = 0;

vegeredmeny_szam = Number(szoveg_szam1) + Number(szoveg_szam2);
console.log(szoveg_szam1 + "+" + szoveg_szam2 + " = " + vegeredmeny_szam);

vegeredmeny_szam_parsolva = parseInt(szoveg_szam1) + parseInt(szoveg_szam2);
console.log(vegeredmeny_szam_parsolva);

// let nemszam = "4abc";
// let szamlesze = Number(nemszam);
// console.log(szamlesze);

let parse_int_szam = parseInt("2ab4");
let number_szam = Number("2ab4");

console.log("2ab4", parse_int_szam, number_szam);

let binary = parseInt("0101", 2);
console.log("0101", binary);

let hex_decimal = parseInt("0xFF", 16);
console.log("0xFF", hex_decimal);


