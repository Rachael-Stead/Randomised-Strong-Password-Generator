// ASSIGNMENT CODE

var characters = [
  "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "-", "*", "`", "{", "|", "}", "~"];
var lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var upLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var generateBtn = document.querySelector("#generate");
var password = document.getElementById("password"); 

// USER IMPUT AND SENARIOS

function generatePasswordOptions() {
console.log("clicked on button"); 

                      //length
while (true){
var length = prompt('Choose length of password 8-128');

  if (length < 8 || length > 128) { 
    alert("Criteria invalid, try agian")
  }else{
  console.log(length);
  break;
}
}
                    //uppercase

  while (true) {
  var uppercase = confirm('Must include uppercase');

  if (uppercase === false) {
      alert('Criteria invalid');

  }else{                               
    console.log(uppercase);
    break;
  }
  }

                  //special characters

  while (true) {
  var special = confirm('Must include special characters');
  
    if (special === false) {
      alert("Criteria invalid");

    }else{
    console.log(special);
    break;
}
  }

                  //lowercase
  while (true){
  var lower = confirm('Must include Lowercase'); 
    
    if (lower === false ) 
    { alert("Criteria invalid")

     }else{
    console.log(lower);
    break;

  }
  }

                      //numbers
while (true) {
  var num = confirm('Must include numbers'); 

  if (num === false ) 
  { alert("Criteria invalid")

}else{ 
 console.log(num);
 break;
}
}

  var criteriaSelection = {
    length:length,
    uppercase:uppercase,
    special:special,
    lower:lower,
    num:num}

return criteriaSelection
}
 
//RANDOM ARRAYS
function generateRandom(arr){

  let randomIndex = Math.floor((Math.random() * arr.length));
  let randomElement = arr[randomIndex];
  return randomElement;
}
function generatePassword(){

  var options = generatePasswordOptions();
  var result = [];
  var randomCharacters = [];
  var concatinatedCharacters = [];

  if (options.num){
    concatinatedCharacters = concatinatedCharacters.concat(numbers);
    randomCharacters.push(generateRandom(numbers))
  }

  if(options.special){
    concatinatedCharacters = concatinatedCharacters.concat(characters)
    randomCharacters.push(generateRandom(characters))
  }

  if(options.lower){
    concatinatedCharacters = concatinatedCharacters.concat(lowLetters)
    randomCharacters.push(generateRandom(lowLetters)) 

  
  if(options.Uppercase){
    concatinatedCharacters = concatinatedCharacters.concat(upLetters)
    randomCharacters.push(generateRandom(upLetters))
  }}

  for( var i = 0; i <options.length;i++){
    var concatinatedCharacter = generateRandom(concatinatedCharacters)
    result.push(concatinatedCharacter);
  }

  for ( var i = 0; i <randomCharacters.length; i++){
    result [i] = randomCharacters [i];
  }
  return result.join("");
} 


//display password on page
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// generate button
generateBtn.addEventListener("click", writePassword);