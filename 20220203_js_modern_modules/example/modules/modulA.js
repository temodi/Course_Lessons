import './modulB.js';

console.log('modulA loaded')

// exporting modules features
export const PI = 3.14;

export function square(a) {
  return a * a;
}

export let functionExpression = function () {
  console.log('this is a funcExp')
}


/* export default function (a, b) {
  return a + b;
} */

 
export default {
  hello: 'world',
  add: function (a, b) { return a + b },
}
