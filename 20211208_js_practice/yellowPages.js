let myPhoneNumbers = [3630792765, 3630369549, 3620797249, 3670129465, 3630735165, 3630799685, 3630294765, 3630739572, 3630792388, 3630792947, 3630798965, 3630799284, 3630793325, 3630799685, 3630194265];
let myNames = ['Bandobras Underhill', 'Robin Gardner', 'Isembold Whitfoot', 'Donnamira Galbassi', 'Bungo Baggins', 'Will Sandyman', 'Isengrim Proudfoot', 'Frodo Baggins', 'Amaranth Gaukrogers', 'Trahand Bunce', 'Will Sandyman', 'Halfred Goodchild', 'Bilbo Baggins', 'Will Sandyman', 'Belba Sandheaver'];
https://jsbin.com/gofanof/2/edit?js

//
// Csinaljunk egy telefonkonyvet a fenti adatokbol
//

// Irj egy fuggvenyt ami parameterkent megkapja a fenti telefonszamokat es neveket
// es osszerak beloluk egy tombot benne bejegyzesekkel amiknek a formaja:
// { name: string, mobile: number }
// { name: 'Dzseni', mobile: 36301234567 }
function createPhoneBook(names, phoneNumbers) { // formalis parameterek
  let phoneBook = [];

  for (let i = 0; i < names.length; i++) {
    let person = {
      name: names[i],
      mobile: phoneNumbers[i]
    };
    phoneBook.push(person);
  }

  return phoneBook;
}

let myPhoneBook = createPhoneBook(myNames, myPhoneNumbers); // aktualis parameterek

/**
 * Irj fuggvenyt ami kap egy nevet es egy telefonszamot parameterkent
 * es hozzadja a telefonkonyvhoz az uj bejegyzest { name: string, mobile: number }
 * A telefonkonyv amibe kell rakni a bejegyzest legyen a fuggveny elso parametere,
 * aztan a nev, aztan a telefonszam
 *
 * Visszateresti ertek legyen az ujonnan letrehozott bejegyzes
 */
function add(telefonkonyv /* referencia */, nev, mobilTelefonszam) {
  // Csinalni kell egy objektumot a name es mobile parameterekkel
  let person = {  // bejegyzes
    name: nev,
    mobile: mobilTelefonszam
  };
  // bele kell pusholni a phoneBook-ba az objektumot
  telefonkonyv.push(person);

  return person;
}

add(myPhoneBook, 'Oliver Kovacs', 36301234567);

/**
 * Irj fuggvenyt ami megkeresi a telefonszamhoz tartozo bejegyzest a telefonkonyben.
 * A fuggveny elso parametere a telefonkonyv amiben keresni kell
 * a masodik a telefonszam amit keresni kell.
 *
 * Ha van talalat a visszateresi ertek legyen a bejegyzes
 * Ha nincs talalat a visszateres legyen null
 */
function findByMobile(phoneBook, mobile) {
  for (let i = 0; i < phoneBook.length; i++) {
    // phoneBook[0] = {name: 'Bandobras Underhill', mobile: 3630792765}
    // phoneBook[0].name
    // phoneBook[0].mobile
    if (phoneBook[i].mobile === mobile) {
      return phoneBook[i];
    }
  }

  return null;
}

console.log(findByMobile(myPhoneBook, 36301234567))  // => { name: 'Oliver Kovacs', mobile: 36301234567 }
console.log(findByMobile(myPhoneBook, 155512345678)) // => null

/**
 * Irj fuggvenyt ami megkeresi a telefonszamhoz tartozo bejegyzest a telefonkonyben.
 * A fuggveny elso parametere a telefonkonyv amiben keresni kell
 * a masodik a telefonszam amit keresni kell.
 *
 * Ha van talalat a visszateresi ertek legyen a bejegyzes indexxe
 * Ha nincs talalat a visszateres legyen -1
 */
function indexByMobile(phoneBook, mobile) {
  for (let i = 0; i < phoneBook.length; i++) {
    if (phoneBook[i].mobile === mobile) {
      return i;
    }
  }

  return -1;
}

function findByName(phoneBook, n) {
  for (let i = 0; i < phoneBook.length; i++) {
    if (phoneBook[i].name === n) {
      return phoneBook[i];
    }
  }

  return null;
}

function find(phoneBook, value) {
  // Generic find string => name, number => mobile
  if (typeof value === 'string') {
    return findByName(phoneBook, value);
  }
  return findByMobile(phoneBook, value);
}

console.log(find(myPhoneBook, 'Oliver Kovacs')) // => { name: 'Oliver Kovacs', mobile: 36301234567 }
console.log(find(myPhoneBook, 36301234567)) // => { name: 'Oliver Kovacs', mobile: 36301234567 }

/**
 * Irj fuggvenyt ami megkeresi az osszes bejegyzest a telefonkonyvben az atadott nevhez.
 * A fuggveny elso parametere a telefonkonyv amiben keresni kell a masodik a nev amit keresni kell.
 *
 * Ha van talalat a visszateresi ertek legyen a bejegyzesek tombje
 * Ha nincs talalat a visszateres legyen ures tomb
 */
function filterByName(phoneBook, n/*string*/) {
  let bejegyzesek = [];

  for (let i = 0; i < phoneBook.length; i++) {
    if (phoneBook[i].name === n) {
      bejegyzesek.push(phoneBook[i])
    }
  }

  return bejegyzesek;
}

function filterBy(phoneBook/*telefonkonyv tomb*/, predicate/*function()*/) {
  let bejegyzesek = [];

  for (let i = 0; i < phoneBook.length; i++) {
    // if (phoneBook[i].name === n) {
    if (predicate(phoneBook[i])) {
      bejegyzesek.push(phoneBook[i])
    }
  }

  return bejegyzesek;
}

function findBy(phoneBook, predicate) {
  for (let i = 0; i < phoneBook.length; i++) {
    // if (phoneBook[i].name === n) {
    if (predicate(phoneBook[i])) {
      return phoneBook[i];
    }
  }

  return null;
}

console.log(
  findBy(myPhoneBook, function (bejegyzes) { return bejegyzes.name === 'Oliver Kovacs' })
);

add(myPhoneBook, 'Oliver Kovacs', 23456765432)
add(myPhoneBook, 'Oliver Kovacs', 98765432123)

// filterByNameCallbackos(myPhoneBook, function (name) { name === 'Oliver Kovacs'});
console.log(
  filterBy(myPhoneBook, function (bejegyzes) { return bejegyzes.name === 'Oliver Kovacs' }), // { name: string, mobile: number }
  filterBy(myPhoneBook, function (bejegyzes) { return bejegyzes.mobile === 36301234567 }) // { name: string, mobile: number }
);

// console.log(filterByName(myPhoneBook, 'Oliver Kovacs')); // => [{ name: 'Oliver Kovacs', mobile: 23456765432}, { name: 'Oliver Kovacs', mobile: 23456765432}...]

/**
 * Irj fuggvenyt ami kap egy telefonszamot es kitorli a hozza tartozo bejegyzest
 * A fuggveny elso parametere a telefonkonyv amibol torolni kell
 * a masodik a telefonszam amit keresni kell.
 *
 * Segitseg: indexByMobile, splice
 *
 * A visszateresi ertek legyen a kitorolt bejegyzes,
 * ha a bejegyzes nem letezett, a visszateresi ertek legyen null
 */
function remove(phoneBook, mobile) {
  // megkeressuk a mobiltelefonszamhoz tartozo bejegyzes index-et a tombben
  let index = indexByMobile(phoneBook, mobile);
  // ha letezik az index,
  if (index > -1) {
    let removedEntry = phoneBook[index];
    // akkor a tombbol splice-szal kitoroljuk
    phoneBook.splice(index, 1);
    // visszaterunk a kitorolt bejegyzessel
    return removedEntry;
  }

  return null;
}

function removeWithSearch(phoneBook, mobil) {
  for (let i = 0; i < phoneBook.length; i++) {
      if (phoneBook[i].mobile === mobil) {
          return phoneBook.splice(i, 1)
      }
  }
  return null;
}

console.log(myPhoneBook.length, remove(myPhoneBook, 36301234567), myPhoneBook);

/**
 * Irj fuggvenyt ami hozzaad egy uj mezot egy letezo bejegyzeshez
 * Bemeneti erteknek kapjon egy telefonkonyvet, egy telefonszamot,
 * az uj mezo nevet, es az uj mezo erteket
 * Ne csinaljon semmt, ha a bejegyzes nem letezik,
 * vagy ha mar van ilyen mezo a bejegyzesen.
 *
 * Pl: egy email cimet szeretnenk hozzaadni egy bejegyzeshez
 * addField(phoneBook, 3630123456, 'email', 'email@example.com')
 *
 * Ha sikerult hozzaadni terjen vissza a bejegyzessel
 * Ha nem sikerult terjen vissza null-lal.
 */
function addField(phoneBook, mobile, field, value) {
  // megkeressuk a mobiltelefonszamhoz tartozo bejegyzest
  let entry = findByMobile(phoneBook, mobile);
  // ha megvan a bejegyzes kihasznaljuk, hogy referenciakent kapjuk, mert object
  if (entry !== null) {
    // a bracket notacioval adunk erteket az uj mezonek
    entry[field] = value;
    return entry;
  }
  // ha nincs meg visszaterunk null-lal
  return null;
}

/**
 * Irj fuggvenyt ami modosit egy letezo mezot egy letezo bejegyzesen
 * Bemeneti erteknek kapjon egy telefonkonyvet, egy telefonszamot,
 * a mezo nevet, es a mezo erteket
 * Ne csinaljon semmt,
 *  - ha a bejegyzes nem letezik,
 *  - ha telefonszamot szeretnenk modositani,
 *  - ha nincs ilyen mezo a bejegyzesen
 *
 * Pl: egy email cimet szeretnenk modositeni egy bejegyzeshez
 * modify(myPhoneBook, 3630123456, 'name', 'Mekk Elek')
 * modify(myPhoneBook, 3630123456, 'mobil', 'Mekk Elek')
 * modify(myPhoneBook, 3630123456, 'nem letezik', 'Mekk Elek')
 *
 * Ha sikerult hozzaadni terjen vissza a bejegyzessel
 * Ha nem sikerult terjen vissza null-lal.
 */
function modify(phoneBook, mobile, field, value) {
  // nem lehet telefonszamot modositani
  if (field === 'mobil') {
    return null;
  }
  // megkeressuk a mobiltelefonszamhoz tartozo bejegyzest
  let entry = findByMobile(phoneBook, mobile);
  // ha megvan a bejegyzes es letezik a modositani kivant mezo
  //   kihasznaljuk, hogy referenciakent kapjuk, mert object
  if (entry !== null && entry[field] !== undefined) {
    // a bracket notacioval adunk uj erteket a mezonek
    entry[field] = value;
    return entry;
  }

  return null
}

function modify2(phoneBook, mobile, field, value) {
  // nem lehet telefonszamot modositani
  if (field === 'mobil') {
    return null;
  }
  // megkeressuk a mobiltelefonszamhoz tartozo bejegyzest
  let index = indexByMobile(phoneBook, mobile);
  // ha megvan a bejegyzes es letezik a modositani kivant mezo
  //   kihasznaljuk, hogy referenciakent kapjuk, mert object
  if (index > -1 && phoneBook[index][field] !== undefined) {
    // a bracket notacioval adunk uj erteket a mezonek
    phoneBook[index][field] = value;
    return entry;
  }

  return null
}

// Irj fuggvenyt ami megformaz egy telefonszamot
// "+36 30 1234 567" formatumban es a formazott telefonszammal
// ter vissza
// Segitseg:
//  - a string indexelheto, mint egy tomb
//  - a slice(start, end) metodus segithet
function formatPhoneNumber(mobile/*number*/) {
  mobile = String(mobile);
  return '+' + mobile.slice(0, 2) + ' ' + mobile.slice(2, 4) + ' ' + mobile.slice(4, 8) + ' ' + mobile.slice(8);
}

console.log(formatPhoneNumber(36301234567))

/**
 * FELADAT:
 * Irj programot ami kiirja az ossze Baggins csaladnevu hobbitot
 * es telefonszamanak formazott alakjat a konzolra.
 */
function bagginsok(phoneBook) {
  let hobbitkak = [];
  for (let i = 0; i < phoneBook.length; i++) {
    if (phoneBook[i].name.includes('Baggins')) {
      hobbitkak.push(phoneBook[i]);
    }
  }
  return hobbitkak;
}

{
  phoneBook[i].name + formatPhoneNumber(phoneBook[i].mobil)
}

/**
 * FELADAT:
 * Irj programot ami az ugyan olyan telefonszammal rendelkezok
 * kozul csak egyet hagy meg
 * Nehez!
 */
let duplicates = [
  { name: 'Mr. 1', mobile: 36301234567 },
  { name: 'Mr. 2', mobile: 36301234567 },
  { name: 'Mr. 3', mobile: 36301234567 },
  { name: 'Ms. 1', mobile: 36301234568 },
  { name: 'Ms. 2', mobile: 36301234568 },
  { name: 'Ms. 3', mobile: 36301234568 },
  { name: 'Mrs. 1', mobile: 36301234569 }
];

// Irj fugvenyt ami megkeresi a duplikalt embert.
// (telefonszam es nev is megegyezik)

// Irj fuggvenyt ami hozzafuzi ezeket az email cimeket az emberekhez
let emails = ['paulnoel21@agung002.com', 'weegrah1@eeothno.com', 'johnjohn69@hungta2.com', 'johnjohn69@hungta2.com', 'yuzhakova1960@hungta2.com', 'yuzhakova1960@hungta2.com', 'lemonkakiska@cggup.com', 'lemonkakiska@cggup.com', 'bd8axwy@cuendita.com', 'bd8axwy@cuendita.com', 'gasg@supok.site', 'gasg@supok.site', 'zaqman@pianoxltd.com', 'zaqman@pianoxltd.com', 'zaqman@pianoxltd.com'];