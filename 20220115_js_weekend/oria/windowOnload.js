
function createInputElement(name) {
  let inputElem = document.createElement('input');
  inputElem.name = name;
  return inputElem;
}

class Akarmi {

}


window.addEventListener('load', function (event) {
  console.log('hello')
  // ami majd fog futni az oldalon
  
  let form = document.querySelector('form');
  
  form.append(createInputElement('username'));
  form.append(createInputElement('pasword'));
});
