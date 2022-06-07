// Assignment code here
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = lowerCase.toUpperCase();
var numbers = '0123456789';
var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Get random integer between provided values
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
};

// Get random character from all available
function getRandomChar () {
  var chars = lowerCase + upperCase + numbers + specialChars;
  var randomIndex = getRandomInteger(0, chars.length);
  var randomChar = chars[randomIndex];

  return randomChar;
}

function generatePassword() {
  // Get requried parametres from user
  var passwordLenght = prompt('Please enter password lenght between 12 - 128');
  var includeNumbers = confirm('Do you want your password to include numbers?');
  var includeLowercase = confirm('Do you want your password to include lowecase?');
  var includeUppercase = confirm('Do you want your password to include uppercase?');
  var includeSpecialChars = confirm('Do you want your password to include special characters?');

  var string = '';
  passwordLenght = parseInt(passwordLenght);

  // Check for correct password lenght
  if(passwordLenght < 12 || passwordLenght > 128 || !Number.isInteger(passwordLenght) ) {
    alert('You chose the wrong number. Please try again');

    return string;
  }

  // Check for correct options
  if(!includeNumbers && !includeLowercase && !includeUppercase && !includeSpecialChars) {
    alert('Please select one option to generate your password!');
    
    return string;
  }
  
  // Build password
  while(string.length < passwordLenght) {
    var randomChar = getRandomChar();

    if(includeNumbers && numbers.includes(randomChar)) {
      string += randomChar;
    }
    else if (includeLowercase && lowerCase.includes(randomChar)) {
      string += randomChar;
    }
    else if(includeUppercase && upperCase.includes(randomChar)) {
      string += randomChar;
    }
    else if(includeSpecialChars && specialChars.includes(randomChar)) {
      string += randomChar;
    }

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
