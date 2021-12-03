//take  user input
//loop through user input
//check if each letter in the word or sentence is letters, numbers or 
//check the string for letters a-z
//then store in a variable called my letters
//check for numbers 0-9
//then store it in variable called myNumbers
//check for other special characters
//store in a variable called mySpecialChar

//create a prompt to get 
let prompt = require('prompt-sync')()
let str = prompt("Enter a any Sentence or word: ")

//getting the length of the string
let len = str.length
//create variable to store letters
let myLetters = "";

//create variable to store numbers
let myNumbers = "";

//create a variable to add all special characters
let mySpecialChar = "";

//using loop to get the individual characters in a string
for(let i = 0; i<=len; i++){
   
 if(str.charAt(i)== 1 || str.charAt(i)== 2||str.charAt(i)== 3 ||str.charAt(i)== 4 ||str.charAt(i)== 5||str.charAt(i)== 6||str.charAt(i)== 7||str.charAt(i)== 8||str.charAt(i)== 9||str.charAt(i)== 0){
myNumbers+=str.charAt(i) + "";
 }

}
//this is to print out all the numbers in the code
console.log(`These are the numbers in your word or sentenec: ${myNumbers.toString()}`)
