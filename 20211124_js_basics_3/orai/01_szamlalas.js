
let sz = "Hello World itt a spaced ";
let spaceNum = 0;

for(let i = 0; i < sz.length; i++) {

  if (sz[i] == ' ') {
    spaceNum++;
  }

  console.log('Ciklus valtozo: ', i, sz[i]);
}

// let sz="H I"; // 3 kar

let spaceNumWhile = 0;
let charIndex = 0; // i 
// while(charIndex < sz.length) {
// charIndex = 0;
// sz[charIndex] => 'H'
// charIndex++ => charIndex == 1
// 1 < 3 
// ..
// 2 < 3
// charIndex == 2
// sz[2] => 'I'
// charIndex++ => charIndex == 3
// while(3 < 3) ... fut a ciklusmagon kivul

while(charIndex <= sz.length-1) {
  if (sz[charIndex] == ' ') {
    spaceNumWhile++;
  }
  charIndex++
}



console.log(spaceNum);
console.log(spaceNumWhile);


let szam = 0;
szam++; // => szam = szam + 1
szam--; // => szam = szam - 1

/* szam++2; //ilyen nincs */

