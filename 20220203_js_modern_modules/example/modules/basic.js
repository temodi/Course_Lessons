// named exportokat importalja
// import { PI, square, functionExpression } from './modulA.js'


// mind2 a default exportot importalja:
//  import modulA from './modulA.js';
import { default as modulA } from './modulA.js';

console.log('basic module loaded')
/* console.log('PI', PI)
console.log('square', square(4))
functionExpression(); */

console.log('modulA default fv', modulA?.add(2, 3))