/*
 - A beadott szamot megszorozza 11-zel es visszaadja az erteket
   - szorzas11x(100) => 111

 - Eldonti egy szamrol, hogy paros-e
   - isEven(100) => true
   - isEven(101) => false

 - A beadott szamot megszorozza sajat magaval
   - pow(5) => 25

 - random general egy szamot min es max kozott
   - rand(1, 6) => random szam 1 es 6 kozott

 - Fuggveny ami osszeadja egy atadott tomb elemeit
   - sumArray([1,2,3]) => 6
   - sumArray([]) => 0
   - sumArray() => NaN
   - sumArray(-1) => NaN

 - Visszaszamol 0-ig a beadott szamtol
   es minden lepest logol a konzolra.
   - countDown(100) => undefined

 - Elszamol until-ig step-lepesekben,
   es minden lepest logol a konzolra.
   Ha nincs step megadva, akkor a step = 1
   - count(until, step) => undefined
*/

// A beadott szamot megszorozza 11-zel es visszaadja az erteket
function szorzas11x(szam) {
  let product = szam * 11;
  return product;
}

// Eldonti egy szamrol, hogy paros-e
function isEven(n) {
  return n % 2 === 0;
}

/**
Ez is jo
function isEven(n) {
  if (n % 2 === 0) { return true; }
  else { return false; }
}
*/

if (isEven(4) === true) {
  console.log('4 paros, helyes');
}
if (isEven(5) === false) {
  console.log('5 paratlan, helyes');
}

// A beadott szamot megszorozza sajat magaval
function pow(n) {
  return n * n; // n ** 2
}

if (pow(5) === 25) {
  console.log('Yaaay, 25 lett, MUKODIK!')
}

// random general egy szamot min es max kozott
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fuggveny ami osszeadja egy atadott tomb elemeit
function sumArray(arr) {
  let sum = 0;

  // Short circuit return
  if (!Array.isArray(arr)) {
      // Eljut ide az interpreter es returnt lat visszater
      return NaN;
  }

  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }

  return sum;
}

if (sumArray([1,2,3]) === 6) {
  console.log('Yaaay, megy az osszegzes!')
}

if (sumArray([]) === 0) {
  console.log('Yaaay, megy az osszegzes!')
}

// debugger;
console.log(sumArray())
console.log(sumArray({}))
console.log(sumArray(-1))
console.log(sumArray("asd"))


/**

szorzotabla( n )

1 * 5 = 5
2 * 5 = 10
...
10 * 5 = 50

1-10 => 10 (10 * n)
pl: 10 * 5 = 50

(5)
"5 x 1 = 5"
"5 x 2 = 10"
"5 x 3 = 15"
"5 x 4 = 20"
"5 x 5 = 25"
"5 x 6 = 30"
"5 x 7 = 35"
"5 x 8 = 40"
"5 x 9 = 45"
"5 x 10 = 50"

(12)
"12 x 1 = 12"
"12 x 2 = 24"
"12 x 3 = 36"
"12 x 4 = 48"
"12 x 5 = 60"
"12 x 6 = 72"
"12 x 7 = 84"
"12 x 8 = 96"
"12 x 9 = 108"
"12 x 10 = 120"
"12 x 11 = 132"
"12 x 12 = 144"

*/

function szorzotabla(n) {
  let szam = n;
  if (n < 10) {
      n = 10;
  }
  for (let i = 1; i <= n; i++) {
  console.log(szam + ' x ' + i + ' = ' + (szam * i));
}
}


/**
Aki kesz:

Irj programot ami kiszamolj a a kutya eletkorat ember evekben
1:7 (ember:kutya)

calcaulateDogAge(7) => 1
*/

function calcaulateDogAge(dogAge) {
  return dogAge / 7;
}

/**
Aki Amerikaban el, es aki nem:

Irj egy farenheit to celsius konvertert
es egy celsius to farenheit convertert
(itt a formula: https://www.mathsisfun.com/temperature-conversion.html)

celsiusToFahrenheit(celsius) => number
fahrenheitToCelsius(fahrenheit) => number
*/

function celsiusToFahrenheit(celsius) {
let celsiusInF = (celsius*9)/5 + 32;
console.log(celsius + '°C is ' + celsiusInF + '°F');
}

function fahrenheitToCelsius(fahrenheit) {
let fahrenheitInC = ((fahrenheit - 32)*5)/9;
console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');
}

/**
fordistd meg a stringet
reverseString("Oliver") => revilO

Aki raer kezelje le azt az esetet is, ha a bemenet nem string.
Aki kap 'denifednu' jelentkezzen :D
*/

function reverseString(str) {
let newString = "";
for (let i = str.length - 1; i >= 0; i--) {
  newString += str[i];
}
return newString;
}

function reversedString2(d){
  let tomb = [];
  for(let i = 0; i < d.length; i++){
      tomb.push(d.charAt(i));
  }
  tomb.reverse();
  return tomb.join('');
}

function reverseString3(szoveg) {
let reverse = [];
for (let i = 0; i < szoveg.length; i++) {
  reverse.unshift(szoveg[i]);
}
return reverse.join('');
}

function reverseString4(szoveg) {
  return szoveg.split('').reverse().join('');
}