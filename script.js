'use strict';
// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];
let getSpecialCharacter =
  specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
// console.log(getSpecialCharacter);

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let getNumeric = Math.floor(Math.random() * numericCharacters.length);
// console.log(getNumeric);
// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
let getLower =
  lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)];
// console.log(getLower);

// Array of uppercase characters to be included in password

let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
let getUpper =
  upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];

// console.log(getUpper);

let concated = [].concat(getNumeric, getSpecialCharacter, getLower, getUpper);
console.log(concated);
// Function to prompt user for password options
function getPasswordOptions() {
  let password = prompt('create you password here');
  return password;
}

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {
  let practicePassword = concated;
  for (let i = 0; i < concated.length; i++) practicePassword += concated;
  return practicePassword;
}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
