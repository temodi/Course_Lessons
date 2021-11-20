
let elsoTomb = []; // deklaraltam egy üres tömböt, vagy elem nélküli tömböt.
let regiTombDeklaralas = new Array(); // deklarálás régi módon

// console.log(elsoTomb);
// console.log(regiTombDeklaralas);


// [] - ures tömb literal
// [1,2,3] - tömb literal
let tombErtekekkel = [1, 2, 3];  // aminek az elemi Number tipus ertekkel van feltolve, 3 db eleme van
let tombErtekRegi = new Array(1, 2,3); /// regi 

// console.log(tombErtekekkel);
// string
let allatok = ['kutya', 'macska', 'eger']; 
//  boolean
let allapotok = [false, true, false];

// console.log(allatok);
// console.log(allapotok);

// mixed  / kevert tömb

let vegyesTomb = [1, 'Hello world', true]; // 3 elem
// console.log(vegyesTomb);

// egy elemre a tombben

console.log(allatok[0]);  // 1. elemem a tömbből
console.log(allatok[1]);  // 2. elemem a tömbből

// console.log(vegyesTomb[4]);

// 1 dimenzios tömb
let bevasarloLista = [
  'Tej',
  'Kenyer',
  'Alma',
  'Cukor'
];

let uresTomb = [];
let egyElemuTomb = ['egyke vagyok'];

// elem csere / feluirasa
let kacatok; 
kacatok = ['ujsagok', 'szemet', 'stb']; // 1. dimenzios

// console.log(kacatok);
// kacatok[2] = 'töröt polc';
// kacatok[1] = 1;
// console.log(kacatok);

// hogy nez ki a memoria sac/kb
let tomb1 = ['alma', 'korte'] // 0000:0110 -> 4 'alma' , 0000:0114 -> 5 (karakter) = 'korte'
let tomb2 = ['alma', 'korte'] // 0000:4031 -> 4 karkter 'alma', 0000:4035 -> 5 (karakter) = 'korte'

// uj elem hozzadas a tombhoz
let novenyek = ['kakutsz','palmafa', 'vizi hinar'];
novenyek[3] = 'fű';

novenyek.push("rozsa"); // hozza ad egy elemet a tömbömhöz, méghozá a tömb végére
// több elmet is hozza lehet adni: push(elem1, elem2....);
console.log(novenyek);

// tömb hosszának lekérdezése
console.log(novenyek.length);

// novenyek.length == 5
// ez az utolso elem csereje
novenyek[novenyek.length-1] = 'liliom';
console.log(novenyek);
// hozzad egy uj elemet
novenyek[novenyek.length] = 'alga';
console.log(novenyek);

novenyek[20] = 'hello';
console.log(novenyek);

// törölni elemeket
let htmlElemek = ['html', 'body', 'valami'];
htmlElemek.splice(2,1);  // 2. indexu elemtől, töröljön 1 db elemet
console.log(htmlElemek);
// delete kulcsszo
let cssProperties = ['background-color', 'color', 'font-size'];
delete cssProperties[2];
console.log(cssProperties);

 // 1. dim tomb
 let jsAdatTipusok = ['Number', 'Boolean', 'String'];

 // 2. dim tomb
 let ticTacToe = [
    ['A', 'O', 'O'],
    ['O', 'X', 'O'],
    ['O', 'X', 'O'],
 ];
 console.log(ticTacToe); // teljes tömbre hivatkozás
 console.log(ticTacToe[0]); // tömb első eleme, ami szinten tömb
 console.log(ticTacToe[0][0]); // tömb első elemének az első elem

 // 3. dim tomb
let dim3tomb = [
  [
    ['a', 'b' ,'c'],
    ['d', 'e' ,'f'],
  ],
  [
    ['1', '2' ,'3'],
    ['4', '5' ,'6'],
  ]
];

// dim3tomb[1dim_index][2dim_index][3dim_index]

console.log(dim3tomb);
console.log(dim3tomb[0]); // a fő tömb első eleme , ami tömb szintén
console.log(dim3tomb[0][0]); // a 1. szint tömb eleme , ami tömb szintén
console.log(dim3tomb[0][0][0]); // a 1. szint tömb eleme , ami tömb szintén






