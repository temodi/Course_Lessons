function diceThrow(sides) {
  let result = Math.floor(Math.random() * sides) + 1;
  console.log(result);
}

diceThrow(6)
diceThrow(20)
diceThrow() // ha nem adunk parametert akkor undefined

function sum(a, b) {
  console.log('a + b = ', a + b);
}

sum(5, 6);

// parameterek
console.log(1,2,3,4,5,6,7,8,9,0)
console.log("hello", "bela")
console.log("hello" + "bela")

//
//
//
// 1. function ami osszead 3 szamot
// es kiirja a konzolba
// sum3(a, b, c) => a + b + c
function sum3(a, b, c) {
  let sum = b + a + c;
  console.log(sum);
}

sum3(5, 10, 15);
// sum3(5, 10) => sum3(5, 10, undefined);
// sum3(5) => sum3(5, undefined, undefined);
// sum3() => sum3(undefined, undefined, undefined);

function sum3v2(a, b, c) {
  if (a === undefined) {
      a = 0;
  }
  if (b === undefined) {
      b = 0;
  }
  if (c === undefined) {
      c = 0;
  }
  a = Number(a);
  b = Number(b);
  c = Number(c);
  let sum = a + b + c; // osszeadas itt a +
  console.log(a + ' + ' + b + ' + ' + c + ' = ' + sum); // osszefuzes itt a +
}

sum3v2() // => 0 (undefined, undefined, undefined)
sum3v2(1) // => (1, undefined, undefined)
sum3v2(1, 2) // => (1, 2, undefined)
sum3v2(1, '2', 3) // => (1, '2', 3)

// 2. function ami atvaltja az 'em' erteket 'px'-re
// es kiirja a konzolba
// em2px(em, base) => px value
function em2px(em, base) {
  if (base === undefined) {
      base = 16;
  }
  console.log(base * em);
}

em2px(2)