// Object
let regiObjektum = new Object(); // objektum adattipus deklaralasa (ez se kell alapbol)
let ujObjektum = {};  // ezt hasznaljuk jelneleg, üres obj. adatip. deklaralsa


// Object deklaralas kezdo ertekkel v. kezdo allapottal
let regiObjektumPropertyvel = new Object();
regiObjektumPropertyvel.kulcs = 'ertek';

let ujObjektumPropertyvel = {
  kulcs: 'ertek'
};

console.log(regiObjektumPropertyvel, ujObjektumPropertyvel);

// {
//   kulcs: 'ertek'
// } - objekrtum literalnak

// {} - objektum literal

let kisAllat = {
  neve: 'Bruno',
  fajtaja: 'foxterier',
  kora: 10,
  magassaga: 40,
  szine: 'barna',
}

console.log(kisAllat);

// property key azonosito megadasa 
let obj = {
  valtozoNev: 'ertek',   // valtozoNev -re ugyanaz ervenyes mint a valtoz nevek megadasanal
}

// property key-t '' között adom meg, ekkor használható egyéb karakter is pl space, kötőjel (ne hasznalju)
let obj2 = {
  '5 space': ' ez az 5 space  ',
  'koto-jel': '-', 
};

// statikus property eleres
console.log(kisAllat.neve);
console.log(kisAllat.fajtaja);

// dinamikus property eleres
console.log(obj2['5 space']);
console.log(kisAllat['szine']);

// milyen kulcsok vannak egy objektumban
// Object.keys(paramater) ahol a paramter egy Objektum tipusu érték (v. valtoyo), a visszateresi ertek: tömb amely az Objektumunk összes property nevét v. kulcsot tartalmazza
console.log(Object.keys(kisAllat));  

// uj property hozzadasa
kisAllat.sulya = 3;
kisAllat.labak_szama = 4;      // igy szoktuk
kisAllat['szem_szin'] = 'kek'; // igy is lehet
console.log(kisAllat);

// modositas a property ertkenek
kisAllat.sulya = 4;
kisAllat.neve = 'Kutyinak';
console.log(kisAllat);

// property törlés
delete kisAllat.labak_szama;
console.log(kisAllat)

// Objektum az objektumba
let szemelyLeiras = {
    neve: 'Kiss Jolan',
    lakcime: {
      iranyitoszam: 1023,
      utca: 'Trombita u.',
      hazszam: '13'
    }
}

console.log(szemelyLeiras)


// objektum objektum propertyre hivatkozas
console.log(szemelyLeiras.lakcime.utca);

/*
let lakcim = szemelyLeiras.lakcime;
// {
//   iranyitoszam: 1023,
//   utca: 'Trombita u.',
//   hazszam: '13'
// }
lakcim.utca */

// tomben objektum
let menuPontok = [
  {
    url: 'http://',
    menuPont: 'Menupont 1',
    color: 'blue',
  },
  'szoveg',
  1,
] 
console.log(menuPontok);
// hivatkozas az tombben levo objektum kulcsra
console.log(menuPontok[0].url)

// objektumban tomb
let menu = {
  menu1: ['menupont 1', 'menupont 2'],
  menu2: ['submenu 1', 'sub 2', 'sub 3'],
}

console.log(menu);
// hivatkozas az objektum property tomb ertkenek a tomb elemere
console.log(menu.menu1[0]);

let elsoMenu = menu.menu1; 
/* elsoMenu == ['menupont 1', 'menupont 2'] */
console.log(elsoMenu[0]);




