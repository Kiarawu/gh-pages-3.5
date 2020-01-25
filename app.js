// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
let generatePassword=getElementbyID("generate")
let values="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()"
let password = prompt("") 

for(i=0;i <= values.length;i++){
writePassword= password+values.charAt(Math.floor(math.random()*Math.floor(values.length-1)));

}
return password }

document.ElementbyId("password").value=password;
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

