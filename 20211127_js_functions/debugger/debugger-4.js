//             0, 1, 2, 3
let numbers = [1, 2, 3, 10];
let sum = 0;

// Feladat: adjatok ossze a tomb elemeit
// kimenet: 1+2+3 = 6
// debugger;
for (let i = 0; i <= numbers.length; i++) {
  console.log(i, numbers[i]);
  if (i === 3) {
    debugger;
  }
  sum += numbers[i];
}