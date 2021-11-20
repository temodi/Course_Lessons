/*
Aladárnak van egy 1 literes falkonja, amelyel tele van vízzel. Minden alkalommal amikor iszik, pontosan 2 dl vizet iszik meg.
Aladár 3 alkalommal igyon. Jelenítsük meg consolon, hogy mennyi viz maradt a flakonjában. 
*/

let flakonDl = 10; /* dl -> 1l -> 10dl */
let iszik = window.prompt("Hanyszor ivott aladar"); 
let ivasMennyisege = 2; 
 

console.log((flakonDl - iszik * ivasMennyisege)+" dl marad a flakonban!");

if (iszik >= 3) {
  console.log("Aladar nagyon szomjas volt!")
} else {
  console.log("Aladar nem nagyon szomjas!")
}
