// alert("hello")

function function_name(formal, parameters) {
  // function body
  return return_value;
}

/**
 * deklaracio
function [fuggveny neve](formalis parameterlista) {
  eljaras test
}
function fuggveny-neve(a, b, c) {
  // test
}

 * invokacio
[fuggveny neve](aktualis parameterlista)
fuggveny-neve(1, 2, 3)
*/

// Deklaracio
function alert2() {
  // nem futtatja a function testet
  console.log(" - hello");
}

alert2();

function alertYolo() {
  alert2();
  console.log(" - YOLO!");
}

function fn() {
  let a = 1;

  console.log(" - fn", a)

  function masikFn() {
    console.log("  - masikFn")
  }

  masikFn()
}

fn()

// Invokacio
alert2() // futtatja a function testet
alertYolo()