/*
Eldontes tetel, csak fuggvenybe csomagolva
letezikE([1,2,3,4], 2) => true
letezikE([1,2,3,4], 9) => false
*/

function eldont(tomb, keresettErtek) {

  for (let index = 0; index < tomb.length; index = index + 1) {
    if (tomb[index] === keresettErtek) {
      return true;
    }
  }

  return false;
}

let vanKeresettElem = eldont(["cica", "kutya", "paripa", "beka"], "kutya");

if (vanKeresettElem) {
  console.log("igen van a tombben keresett elem");
} else {
  console.log("nincs tombben keresett elem");
}