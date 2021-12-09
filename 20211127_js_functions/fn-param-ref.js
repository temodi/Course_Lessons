/**
 * Referencia szerint kerul atadasra a Array es az Object
 * A primitiv tipusok (Number, Boolean, String) masolva lesznek
 */

function szor(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    // Ez a sor feulirja a tomb erteket
    arr[i] = arr[i] * n;
  }
  return arr;
}

let tombocske = [1, 2, 3, 4, 5];

console.log(szor(tombocske, 2));
// tombocske = [2, 4, 6, 8, 10];
// ...

// Mivel a tombocske referencia szerint kerul atadasra
// es a szor fn felulirja az erteket, ezert masodszori
// meghivasra mar nem azt az eredmenyt kapom amit varnek

console.log(szor(tombocske, 3));
// tombocske = [6, 12, 18, 24, 30];