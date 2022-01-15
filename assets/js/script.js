// Assignment Code
let generateBtn = document.querySelector("#generate");
let numbers = "0123456789";
let lowerCase = "qwertyuioplkjhgfdsazxcvbnm";
let upperCase = "QWERTYUIOPLKJHGFDSAZXCVBNM";
let specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";


// Write password to the #password input
function writePassword() {
//ask user for characters and range check
  let numChar = parseInt(prompt("How many characters do you want it to be? (choose between 8–128 characters)"));
  if (numChar < 8 || numChar > 128 ) {
    return alert("Invalid length");
  }

 //option 2
 /* let selectNum = false;
  while (selectNum == false) {
    numChar = prompt("How many characters do you want it to be? (choose between 8–128 characters)");
  if (numChar > 8 && numChar < 128 ) 
    selectNum = true;
  }*/

//confirm password input requirements
  let wantNum = confirm("Do you want to include numerical characters?");
  let wantLowerCase = confirm("Do you want to include lower case letters?");
  let wantUpperCase = confirm("Do you want to include upper case letters");
  let wantSpec = confirm("Do you want to include special characters?");
  let passwordOptions = "";

  if (wantNum == true)
    passwordOptions += numbers;
  if (wantLowerCase == true)
    passwordOptions += lowerCase;
  if (wantUpperCase == true)
    passwordOptions += upperCase;
  if (wantSpec == true)
    passwordOptions += specialChars;
  
  let password = "";
   for (let i=0; i < numChar; i++)  {
     password += passwordOptions[Math.floor(Math.random(Date.now)*passwordOptions.length)];
   }

  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
