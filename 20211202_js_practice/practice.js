/**

========
Eldontes
========
Szeretnénk tudni, hogy egy érték megtalálható-e egy tömbben.
Irj fuggvenyt ami 2 parametert kap.
Az elso parameter a tomb amiben keressuk az elemet.
A masodik parameter az elem amit keresunk.
Ha megtalalta az element terjen vissza true-val, ha nem akkor false-val.
letezik([1,2,3,4], 0) => false
letezik([1,2,3,4], 2) => true

*/

function keres(array, szam) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === szam) {
      return true;
    }
  }

  return false;
}
console.log(keres([1, 2, 3, 4], 2));

/**

===========
Kivalasztas
===========
Az adott elem a tömb hányadik helyén van, tudjuk, hogy az elem benne van a tombben
Irj fuggvenyt ami 2 parametert kap.
Az elso parameter a tomb amiben keressuk az elemet.
A masodik parameter az elem amit keresunk.
A fuggveny terjen vissza a megtalalt elem poziciojaval.
letezik([1,2,3,4], 0) => -1, null, false, valami ami azt jeloli,
letezik([1,2,3,4], 2) => true
letezik(['alma', 'korte'], 'alma') => true

*/

function kivalasztas(array, szam) {
  for (let i = 0; i < array.length; i++) {
      if (array[i] === szam) {
          return i;
      }
  }

  return null;
}
// Array.indexOf
console.log(kivalasztas([3, 5, 7], 3));


/**

===========
Masolas
===========
Egy sorozat elemeit átmásolom egy másik sorozatba, miközben valamilyen átalakítást végzek az egyes elemeken.
peldaul minden szamhoz hozzaadok egyet
map(Array<T>) => Array<T'>

Irj fuggvenyt ami parameterkent kap egy tombot minden elemehez hozzaad egyet
es visszater a tombbel amiben a novelt ertekek vannak.
Figyelj arra, hogy az eredeti tombot ne modosits!

*/

function addOne(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + 1);
  }

  return newArray;
}

console.log(addOne([5, 6, 10]));

/**

NYERTES LOTTOSZELVENY GENERATOR

Irj fuggvenyt ami kitolt egy lottoszelvenyt.
A fuggveny bemeneti parametere legyen a lotto tipusa (pl otoslotto)
A fuggveny visszateresi erteke legyen egy tomb benne a NYERTES lottoszamokkal

Mukodjon otos-, hatos- es skandi lottora is.
 - 5-os lotto: 5 szam [1-90]
 - 6-os lotto: 6 szam [1-45]
 - skandi    : 7 szam [1-35]

Extra
 - Adj hozza egy bemeneti parametert amitol a fuggveny joker szamot is ad vissza (a joker egy random 6 jegyu szam)
 - Mukodjon eurojackpotra is: A es B mezo van. A mezo [1-50] 5 szam, B mezo [1-10] 2 szam

*/

/**

NYERTES LOTTOSZELVENY GENERATOR

Irj fuggvenyt ami kitolt egy lottoszelvenyt.
A fuggveny bemeneti parametere legyen a lotto tipusa (pl otoslotto)
A fuggveny visszateresi erteke legyen egy tomb benne a NYERTES lottoszamokkal

Mukodjon otos-, hatos- es skandi lottora is.
 - 5-os lotto: 5 szam [1-90]
 - 6-os lotto: 6 szam [1-45]
 - skandi    : 7 szam [1-35]

Extra
 - Adj hozza egy bemeneti parametert amitol a fuggveny joker szamot is ad vissza (a joker egy random 6 jegyu szam)
 - Mukodjon eurojackpotra is: A es B mezo van. A mezo [1-50] 5 szam, B mezo [1-10] 2 szam
 - Minden szamot csak egyszer adjon ki

*/

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function otoslotto() {
  return [random(1, 90), random(1, 90), random(1, 90), random(1, 90), random(1, 90)];
}

function hatoslotto() {
  let lottoszamok = [];
  for (let i = 0; i < 6; i++) {
      lottoszamok.push(random(1, 45));
  }
  return lottoszamok;
}

function skandi() {
  let lottoszamok = [];
  for (let i = 0; i < 7; i++) {
      lottoszamok.push(random(1, 35));
  }
  return lottoszamok;
}

function genericLotto(db, max) {
  let lottoszamok = [];
  for (let i = 0; i < db; i++) {
      lottoszamok.push(random(1, max));
  }
  return lottoszamok;
}

genericLotto(5, 90); // otoslotto
genericLotto(6, 45); // hatoslotto
genericLotto(7, 35); // skandi

// A fuggveny bemeneti parametere legyen a lotto tipusa (pl otoslotto)
// A fuggveny visszateresi erteke legyen egy tomb benne a nem NYERTES lottoszamokkal
function lotto(lottoTipusa) {
  if (lottoTipusa === 'otoslotto') {
      return otoslotto();
  }
  else if (lottoTipusa === 'hatoslotto') {
      return hatoslotto();
  }
  else if (lottoTipusa === 'skandi') {
      return skandi();
  }
}

lotto('otoslotto')

function lottoSwitch(lottoTipusa) {
  switch (lottoTipusa) {
      case 'otoslotto': return otoslotto;
      case 'hatoslotto': return hatoslotto;
      case 'skandi': return skandi;
  }
}