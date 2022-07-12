const password1Box = document.querySelector('.password1');
const password2Box = document.querySelector('.password2');

let password1Arr = []
let password2Arr = []
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

    // 1. password lenght = 15
    // 2. generator 2 passwords

    // Logic
    // - loop 15 times
    // []
    // generate random index
    // .push random charater
    // join that array to string

const passwordLength = 15;

function randomIndexGenerate() {
    return Math.floor(Math.random() * characters.length);
}
function generatePasswords() {
    password1Arr = []
    password2Arr = []
    for (let i = 0; i < passwordLength; i++) {
        
        password1Arr.push(characters[randomIndexGenerate()])
        password2Arr.push(characters[randomIndexGenerate()])
    }

    password1Box.textContent = password1Arr.join('')
    password2Box.textContent = password2Arr.join('')
}