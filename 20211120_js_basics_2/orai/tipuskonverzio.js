
// explicit tipuskonverzio
let szoveg1 = "hello";
console.log(Number(szoveg1)) // -> NaN , egyebkent ha szamma tudja alakitani akkor Number tipusu adatot ad vissz

let igazhamis = false;
let szamot = 4;

Boolean(igazhamis); //  Boolean tipus false
// ha parameter nem nulla, nem null, nem üres érték ("") vagy pozitiv vagy negativ szam (kiveve -0), => true 
// ha paramter 0, (-0), null, false, NaN, undefined, "", vagy nincs parameter, akkor false-t add vissza
Boolean(szamot);  // Boolean tipus true ,


// midnent stringkent ad vissza
let szam = 1;
String(szam) // "1" tehat stringkent adja vissza
String(true) // "true" stringliteralkent adja vissza

//
let a = "3";
let b = "4";
let terulet = 0;
// explicit konverzioval van
terulet = Number(a) * Number(b);
// implicit konverzioval igy
terulet = a * b;  // interpreter fogja Number alakitani

// + tulterhelt operator 
// szám (Number) esetén összeadás
// szövegliter (String) esetén konkatenáció vagyis string öszefüzés

let a = "1";
let b = "4";
console.log(a + b); // 2 string -> összefűzés a művelet +> "14"

let sz1 = 1;
let sz2 = 2;
console.log(sz1 + sz2); // 2 Number -> összeadas


