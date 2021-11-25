let userInput = Number(prompt('?'));

while (userInput !== solution) {

  if (userInput - solution == -2) {
    userInput = Number(prompt('kicsit nagyobbat'));
  } else if (userInput - solution == 2) {
    userInput = Number(prompt('kicsit kisebbet'));
  } else if (userInput == solution) {
    alert(':)')
  } else {
    alert(':(')
  }

}