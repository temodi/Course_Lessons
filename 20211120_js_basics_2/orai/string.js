
let szoveg1 = "Hello world";
let szoveg2 = "Parikas krumpli";

// substring  - reszstringet tudok letrehozni az eredeti stringbol
console.log(szoveg1.substring(0, 5));
// 1. karakter
console.log(szoveg1[0]); 

// includes
console.log(szoveg1.includes("Hello"));

if (szoveg1.includes("worldx")) {
  alert("Jee one world!")
}