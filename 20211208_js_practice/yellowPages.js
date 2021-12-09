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
function filterByName(phoneBook, name) {
  let talaltElemek = null; // kell valami amibe tudjuk gyujteni az elemeket

  for (let i = 0; i < phoneBook.length; i++) {
    if (phoneBook[i].mobile === mobile) {
      talaltElemek = phoneBook[i]; // utasitas ami belerakja a talalt elemet abba amibe gyujteni tudunk
    }
  }

  return talaltElemek;
}

add(myPhoneBook, 'Oliver Kovacs', 23456765432)
add(myPhoneBook, 'Oliver Kovacs', 98765432123)

filterByName(myPhoneBook, 'Oliver Kovacs') // => [{ name: 'Oliver Kovacs', mobile: 23456765432}, { name: 'Oliver Kovacs', mobile: 23456765432}...]