// Assignment code here
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
};


function getRandomChar () {
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var upperCase = lowerCase.toUpperCase();
  var numbers = '0123456789';
  var specialChars = '`!@#$%^&*()_+=-}{;][/';
  var chars = lowerCase + upperCase + numbers + specialChars;
  var randomIndex = getRandomInteger(0, chars.length);
  var randomChar = chars[randomIndex];


  return randomChar;
}

function generatePassword() {
  var passwordLenght = prompt('Please enter password lenght between 12 - 128');
  var includeNumbers = confirm('Do you want your password to include numbers?');
  var includeLowercase = confirm('Do you want your password to include Lowecase?');
  var includeUppercase = confirm('Do you want your password to include Uppercase?');
  var includeSpecialChars = confirm('Do you want your password to include Special Characters?');

  var string = '';

  if(passwordLenght < 12 || passwordLenght > 128  ) {
    alert('You chose the wrong number. Please try again');

    return string;
  }
  
  
  
  for(var i = 0; i < passwordLenght; i++) {

    string = string + getRandomChar() ;

  } 
  return string;
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
