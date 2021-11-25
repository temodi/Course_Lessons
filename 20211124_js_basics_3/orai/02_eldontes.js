
          //0. 1. 2. 3. 4. 5. 6. elem
let tomb = [1, 2, 4, 5, 2, 3, 1];
let keresettErtek = 5;
let vanKeresettElem = false;


/* index = 0 indul
   novelem 1 el
   ...
   ...
   // index = 1millo

   tomb.length -> hany db elem van bene a tombbe
   tomb[index] -> 0.-tól kezodik az index.  az utolso elem, tomb.length - 1 => 6.
*/

for(let index = 0; index <= tomb.length-1; index = index + 1) {
  console.log('index:'+index+', tomb[index]:'+tomb[index]+' tomb.length-1:'+(tomb.length-1));
  if (tomb[index] == keresettErtek) {
      //  1 == 5 -> false
      //  2 == 5 -> false
      //  ...
      //  5 == 5 -> true 
    vanKeresettElem = true; // igen, van keresettErtek
  }
}

if (vanKeresettElem) {
  console.log("igen van a tombben keresett elem");
} else {
  console.log("nincs tombben keresett elem");
}


 