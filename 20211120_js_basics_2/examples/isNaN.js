let milyenadat = "abc"
let szamok = 2;

console.log('milyenadat:'+isNaN(milyenadat));
console.log('szamok:'+isNaN(szamok));
console.log('NaN:'+isNaN(NaN));

console.log('milyenadat:'+Number.isNaN(milyenadat));
console.log('szamok:'+Number.isNaN(szamok));
console.log('NaN:'+Number.isNaN(NaN));

/*

 isNaN(paramter) => ha szamma konvertalhato, akkor false-t vissza, ha NaN-ertekre konvertalja, mert
                    szamra nem konvertalhato, akkor true

 Number.isNaN(paramter) => parameter maga NaN érték-e
*/

// isNaN("a") => "a" tipuskonverzio utan NaN erteket fog produkalni
// true
// Number.isNaN("a") => "a" az nem NaN 
// false



              
