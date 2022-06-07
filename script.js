// Assignment code here
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


function getRandomChar () {
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  var upperCase = lowerCase.toUpperCase()
  var numbers = '0123456789'
  var specialChars = '`!@#$%^&*()_+=-}{;][/'
  var chars = lowerCase + upperCase + numbers + specialChars
  var randomIndex = getRandomInteger(0, chars.length)
  var randomChar = chars[randomIndex] 


  return randomChar
}

function generatePassword() {
  var string = ''
  for(var i = 0; i < 15; i++) {

    string = string + getRandomChar() 

  } 
  return string
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
