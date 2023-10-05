var passPrompt
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"]
var storeCharacters = []
var retVal = ""

function generatePassword() {
  passwordPrompt()
  var lowercasePrompt = window.confirm('Include lowercase letters?');
  if (lowercasePrompt) {
    for (let i = 0; i < lowercase.length; ++i) {
      storeCharacters.push(lowercase[i])
    }
  }

  var uppercasePrompt = window.confirm('Include uppercase letters?');
  if (uppercasePrompt) {
    for (let i = 0; i < uppercase.length; ++i) {
      storeCharacters.push(uppercase[i])
    }
  }

  var specialPrompt = window.confirm('Include special characters?');
  if (specialPrompt) {
    for (let i = 0; i < special.length; ++i) {
      storeCharacters.push(special[i])
    }
  }

  var numericPrompt = window.confirm('Include numeric values?');
  if (numericPrompt) {
    for (let i = 0; i < numeric.length; ++i) {
      storeCharacters.push(numeric[i])
    }
  }

  for (var n = 0; n = storeCharacters.length; ++n) {
    // retVal += storeCharacters[n]
    // console.log(Math.floor(Math.random() * n))
  }
  console.log(storeCharacters)
  console.log(retVal)
  // this needs to be fixed because we dont want the 0 index
  return document.querySelector("#password").value = storeCharacters[0]
}

function passwordPrompt() {
  passPrompt = prompt('How many characters long?'); {
    if (passPrompt >= 8 && passPrompt <= 128) {
      return;
    } else {
      (window.alert('Password length must be between 8-128 characters long.'));
      passwordPrompt();
    }
  }
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
