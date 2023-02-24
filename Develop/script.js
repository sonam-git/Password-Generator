// Assignment code here
//set default character length as 8
var characterLength = 8;
// to store all the possible letters and symbol while creating a password
var choiceArr = [];
// array to store lowerCase letters
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//array to store uppercase letters
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//array to store numbers
var numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//array to store special characters
var specialCharArr = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '{', '}', '^', '|'];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  // create variable called correctPrompts for true or false
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");
  // if the user give the right prompts then it will generate the password.
  if (correctPrompts) {
    var password = generatePassword();
    passwordText.value = password;

  } else {
    passwordText.value = " ";
  }

}

//This function generates the password based on the getPrompts function user input
function generatePassword() {
  //empty string
  var passwordText = "";
  // for loop , this loop keeps going until the length entered by the user meets.
  for (var i = 0; i < characterLength; i++) {
    // create var called randomLetter
    var randomLetter = Math.floor(Math.random() * choiceArr.length);
    passwordText  = passwordText + choiceArr[randomLetter];
  }
  return passwordText;
}

// This function get the user input 
function getPrompts() {
  //Reset choiceArr to be an empty array
  choiceArr = [];
  // this will grab the character length from user into the array named characterLenth as string and parseInt will convert that string into numbers and save in it.
  characterLength = parseInt(prompt("How many characters would you like to be in the password ? (8-128 characters)"));
  // this statement make sure user input meets the requirements. Basically this all have to be false to meet the requirements.
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character lengths has to be between 8 -128 digits. Please try again !");
    return false;
  }
  // this will gives the multiple option to create a password by shwoing in prompt & save user input into choiceArr 
  if (confirm("Would you like lowercase in your Password ?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (confirm("Would you like uppercase in your Password ?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if (confirm("Would you like special characters in your Password ?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }
  if (confirm("Would you like numbers in your Password ?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}
