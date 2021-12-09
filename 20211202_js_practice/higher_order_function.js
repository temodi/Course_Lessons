// let osszead = (a, b) => a + b;
function osszead(a, b) {
  return a + b;
}

osszead(1, 2)

// let kivon = (a, b) => a - b;
function kivon(a, b) {
  return a - b;
}

function szamologep(a /*number*/, b/*number*/, muvelet/*function (a, b)*/) {
  return muvelet(a, b);
}

szamologep(1, 2, osszead);
szamologep(1, 2, kivon);
szamologep(1, 2, function (a, b) { return a / b  });
szamologep(100, 200, function (a, b) { return a * b });
szamologep(2, 8, (a, b) => a ** b);
// **

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert("You damn fool!");
}

function showCancel() {
  alert("Phew! You almost removed everything");
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Are you sure?", showOk, showCancel);

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Are you sure?",
  function() { alert("You damn fool!"); },
  function() { alert("Phew! You almost removed everything"); }
);

//
// EACH
//
function each(array, func) {
  for (let i = 0; i < array.length; i += 1) {
    func(array[i]);
  }
}
// Írjuk ki a tömb összes elemét, egyesével:
each([1, 2, 3], console.log);

//
// MAP
//
function map(array, func) {
  let result = [];
  for (let i = 0; i < array.length; i += 1) {
    // Minden elemre lefut a megkapott függvény,
    // aminek eredményével feltöltjük a tömböt.
    result[i] = func(array[i]);
  }
  return result;
}
map([1, 2, 3], function (a) { return a + 1 }); // [2, 3, 4]

//
// fuggvennyel ter vissza
//
function addNumber(num) {
  return function (a) {
    // Lefele csordogalas miatt hozzáférünk a num változóhoz.
    return a + num;
  }
}
// az add10 függvény minden számhoz, amit paraméterként kap, 10-et ad hozzá.
var add10 = addNumber(10);
map([1, 2, 3], add10); // [11, 12, 13]
// Változó bevezetése nélkül, most 100-at adunk hozzá
map([1, 2, 3], addNumber(100)); // [101, 102, 103]