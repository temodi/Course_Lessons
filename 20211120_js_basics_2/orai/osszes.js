/*
Aladárnak van egy 1 literes falkonja, amelyel tele van vízzel. Minden alkalommal amikor iszik, pontosan 2 dl vizet iszik meg.
Aladár 3 alkalommal igyon. Jelenítsük meg consolon, hogy mennyi viz maradt a flakonjában. 
*/

let flakonDl = 10; /* dl -> 1l -> 10dl */
let iszik = 0; 
let ivasMennyisege = 2; 

// 3x iszik aladar
// iszik = 0
//
console.log("iszik:", iszik);
iszik = iszik + 1; // 1. alkalom 
console.log("iszik:", iszik);
// iszik = 0 + 1;
iszik = iszik + 1; // 2. alk
console.log("iszik:", iszik);
// iszik = 1 + 1;
iszik = iszik + 1; // 3. alk
console.log("iszik:", iszik);
// iszik = 2 + 1;

console.log("Dl maradt:" + (flakonDl - iszik * ivasMennyisege))
console.log(flakonDl - iszik * ivasMennyisege + " dl marad a flakonban!");

if (iszik >= 3) {
  console.log("Aladar nagyon szomjas volt!")
} else {
  console.log("Aladar nem nagyon szomjas!")
}
