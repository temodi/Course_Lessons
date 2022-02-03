// import atnevezes
// import { eredeti_export_nev as uj_nev } from './modul.js';
import { list as arrayList, find as arrayFind } from './myArray.js';
import { list as stringList, find as stringFind } from './myString.js';
import { Animal } from './classExport.js';

function list() {

}

function find() {

}
let arr = [1, 2, 3];
console.log('arr:', arrayFind(arr, 2));
arrayList(arr);

const newAnimal = new Animal('Buksi');
console.log('newAnimal', newAnimal);
console.log(newAnimal.getName())