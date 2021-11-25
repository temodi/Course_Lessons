
//  '='  -> érték adást jelento operator

let valtozom1 = 'aaaa';
let valtozom2;

valtozom2 = valtozom1;  
// valtozo1 => 'aaaa'
// valtozo2 => 'aaaa'

// if (valtozom1 = valtozom2) => ez hibas

// for(let ciklusValtozo = 1; ciklusValtozo < 123; ciklusValtozo = ciklusValtozo + 1)  {}

let i = 0;
// while(i < 0) {}

// while(i = 1) {} => ez is hibas

// == -> egyenlőség vizsgálatára , összehasonlitó operator
let feltetel = true;
if(feltetel == true) {} // ha a feltetel igaz..

// while(feltetel == true) {} // ha feltetel igaz, addig fut

// === => Strict equality v. szigorú összehasonlítás

console.log('1' ===  1);   
console.log(0 === false); // 0 nem alakitja at false-ra es ezert nem lesz egyenlo a ket oldal
console.log(0 == false); 




