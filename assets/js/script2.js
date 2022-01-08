// Assignment Code
let generateBtn = document.querySelector("#generate");
let numbers = "0123456789";
let lowerCase = "qwertyuioplkjhgfdsazxcvbnm";
let upperCase = "QWERTYUIOPLKJHGFDSAZXCVBNM";
let specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
let passwordOptions = "";
let numChar = 0;

function generatePassword() {
  let password = "";
  for (let i=0; i < numChar; i++)  {
    password += passwordOptions[Math.floor(Math.random(Date.now)*passwordOptions.length)];
  }

  return password;
}


// Write password to the #password input


function writePassword() {
  numChar = prompt("How many characters do you want it to be?");
  let wantNum = confirm("Do you want to include numerical characters?");
  let wantLowerCase = confirm("Do you want to include lower case letters?");
  let wantUpperCase = confirm("Do you want to include upper case letters");
  let wantSpec = confirm("Do you want to include special characters?");
  console.log(numChar);
  if (wantNum == true)
    passwordOptions += numbers;
  if (wantLowerCase == true)
    passwordOptions += lowerCase;
  if (wantUpperCase == true)
    passwordOptions += upperCase;
  if (wantSpec == true)
    passwordOptions += specialChars;


  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
