function sum(a, b) {
  console.log('a + b = ', a + b);
}

// ...

sum(5, 6);

// En leszek az interpreter
// function => sum(a, b)
// ...
// "sum" Mi az a "sum"?
// f: sum(a, b)
// invokacio: sum(5, 6)
// f: sum body
// console.log('a + b = ', a + b);
// van-e elso parameter?
// a = 5
// behelyettesit
// console.log('a + b = ', 5 + b);
// van-e masodik parameter
// b = 6
// behelyettesit
// console.log('a + b = ', 5 + 6);
// nincs tobb parameter
// console.log('a + b = ', 5 + 6);
// console.log('a + b = ', 11);
// console.log('a + b = 11');