// Assignment code here
// criterias
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "`", "~", "<", ",", ">", ".", "/", "?"];
var numbers = ["1", "2" , "3" , "4", "5", "6", "7", "8", "9", "0"];

var passwordText = document.querySelector("#password");




function generatePassword() {
  passwordText.value = "";

  var passwordLenght = window.prompt("How many charactars would you like from 8 to 128?");

  if (passwordLenght < 8 || passwordLenght > 128) {
    windows.alert("No less than 8 or more than 128!!!");
    return generatePassword();
  }

   var uppercaseChar = window.confirm("Do you like to include uppercase?");
   var lowercaseChar = window.confirm("Do you like to include lowercase?");
   var symbolsChar = window.confirm("Do you like to include some symbols?");
  var numbersChar = window.confirm("Do you like to include any numbers?");


  var generation = [];
var characterIn = [];

if (!uppercaseChar && !lowercaseChar && !symbolsChar &&!numbersChar) {
  window.alert("You have to choose at least one character");
  return generatePassword();
}
if (uppercaseChar) {
  generation =  generation.concat(uppercase);}
  if (lowercaseChar) {
    generation = generation.concat(lowercase);}
    if (symbolsChar) {
      generation = generation.concat(symbols);}
      if (numbersChar) {
        generation = generation.concat(numbers);}
        for (var i = 0; i < passwordLenght; i++) {

          characterIn.push(generation[Math.floor(Math.random() * generation.length)]);
      
        }
      
          return characterIn.join('');
        }

        // Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
