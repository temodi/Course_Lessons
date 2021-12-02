// Kivalogatas
//
// A tömb elemit egy másik tömbbe rakom, feltételhez kötve.
// Például: Adott a és b tömb. Az a tömb egész számokat tartalmaz.
// Az a tömbből az 5-nél kisebb számokat átrakom b tömbbe.

// Olyan fuggveny ami kap egy tombot parameternek
// ebbol a tombbol visszater az osszes paros szammal



// Biztos letre kell hozni egy fuggvenyt
// Kell egy ciklus ami vegig megy a parameterkent atadott tombbon
// Kell egy ures tomb amibe tudunk pusholni ha a feltetelunk teljesul
function csakParos(tomb, callback) {
  let kivalasztottak = [];
  for (let i = 0; i < tomb.length; i++) {
    if (tomb[i] % 2 === 0) {
      kivalasztottak.push(tomb[i])
    }
  }
  return kivalasztottak;
}

//
// Hazi feladat
//
// Módosíts a fenti kiválogatást tételt (részben) megvalósító függvényt
// úgy, hogy második paraméternek egy callback function kapjon.
// Az uj fuggveny neve legyen kivalogatas.
// Az átadott callback function végezze a feltétel vizsgálatot a leválogatáshoz.

// Teszt esetek a feladathoz
function paros(szam) {
  return szam % 2 === 0;
}
let parosak = kivalogatas([1, 2, 3, 4, 5, 6], paros); // => [2, 4, 6]
console.log(parosak)

let paratlan = function (szam) {
  return szam % 2;
}
let paratlanok = kivalogatas([1, 2, 3, 4, 5, 6], paratlan) // => [1, 3, 5]
console.log(paratlanok)

let ottelOszthatok = kivalogatas([1, 2, 3, 4, 5, 6], function (szam) {
  return szam % 5 === 0
}) // => [5]
console.log(ottelOszthatok)