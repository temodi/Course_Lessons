import { signupScreen } from './signUpScreen.js';

console.log('modul loaded: mainScreen');

function mainScreen() {
    console.log('mainScreen started')

    const button = document.createElement('button');
    button.innerHTML = "Signup";
    button.type = 'button';
    button.addEventListener('click', function () {
      signupScreen();
    })
    document.body.append(button)
}

export { mainScreen }