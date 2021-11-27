// masik feladat, MOSTRA (FizzBuzz)
// Ird ki a szamokat 1-10-ig, de
//  - a harommal oszthatok helyere ird, hogy "fizz"
//  - az ottel oszthatok helyere ird, hogy "buzz"
// kimenet: 1, 2, Fizz, 4, Buzz, Fizz...


// Aki kesz van a fenti FizzBuzz-zal
// Modositsd a programot ugy, hogy 100-ig szamoljon
// es a harommal es ottel oszthato szamok helyere "FizzBuzz"-t irjon
//
// Szuper advanced: Ird meg 1 sorba (Array.reduce) v (Array.map) (Array.from)


//
// Szorgalmi annak aki unatkozik
//
// Add ossze a matrix elemeit
// kimenet: 1+2+3+4+5+6 = 21
let pairs = [
  [1, 2], // 0
  [3, 4], // 1
  [5, 6]  // 2
];
console.log(pairs[1][0])
console.log(pairs[2][1]) // 6
console.log(pairs[0][0]) // 1
console.log(pairs[3][0]) // undefined
let sum = 0;

// for (let i = 0; i < pairs.length; i++) {
//   let current = pairs[i];
//   for (let j = 0; j < current.length; j++) {
//     let szam = current[j];
//     sum += szam;
//   }
// }

for (let i = 0; i < pairs.length; i++) {
  for (let j = 0; j < pairs[i].length; j++) {
    sum += pairs[i][j];
  }
}

console.log(sum)

// Ket for ciklus kell
// Egyik vegigmegy a "kinti tombon"
// [1,2], [3,4], [5,6] lesznek az elemei
// A benti ciklus ^ ezeken az elemeken lepked vegig
// 1,2,3,4,5,6 lesznek az elemei

// Ki van kesz? 3
// for (/*...*/) {
//   for (/*...*/) {
//     sum += /*...*/
//   }
// }

