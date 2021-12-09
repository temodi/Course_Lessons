function szorzas11x(szam) {
  let product = szam * 11;
  return product;
  console.log('Ide sose kerul az interpreter');
}

function egysorbanszorzat(szam) {
  return szam * 11;
}

let szorzat10x11 = szorzas11x(10); // => 110
console.log(szorzat10x11);

let szorzat1x11 = szorzas11x(1); // 11
console.log(szorzat1x11);

let ujabbszorzat = szorzas11x(1) * 2;
console.log(ujabbszorzat)

//
//
//

// 2. function ami atvaltja az 'em' erteket 'px'-re
// es kiirja a konzolba
// em2px(em, base) => px value
function em2px(em, base) {
  if (base === undefined) {
    base = 16;
  }
  console.log((base * em) + 'px');
  return base * em;
}


function sum(a, b) {
  return a + b; // visszateresi ertek
}

let osszeg = sum(2, 10);

console.log(osszeg + 4);

function fn() {}

if (fn() === undefined) {
  console.log('ha nincs return a visszateresi ertek undefined')
}

//
//
//
function minusFive(a) {
  return a - 5;
}

let aminus5 = minusFive(15) + 5

console.log(

  aminus5

)