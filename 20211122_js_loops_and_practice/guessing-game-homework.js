let solution = Math.floor(Math.random() * 100) + 1;
let userInput = Number(prompt('?'));

if (userInput === solution) {
  alert('You win');
} else if (userInput - solution == -2) {
  userInput = Number(prompt('kicsit nagyobbat'));
  if (userInput === solution) {
    alert('You win');
  } else {
    alert(':(');
  }
} else if (userInput - solution == 2) {
  userInput = Number(prompt('kicsit kisebbet'));
  if (userInput === solution) {
    alert('You win');
  } else {
     alert(':(');
  }
}