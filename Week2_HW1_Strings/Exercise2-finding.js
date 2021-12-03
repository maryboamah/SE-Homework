//create a prompt to get 
let prompt = require('prompt-sync')()
let str = prompt("Enter a any Sentence or word: ")
//change string to uppercase
let strUpper = str.toUpperCase()
//getting the length of the string
let len = strUpper.length

//create variable to store letters
let myLetters = "";

//create variable to store numbers
let myNumbers = "";

//create a variable to add all special characters
let mySpecialChar = "";
let i = 0;

//using loop to get the individual characters in a string
while(i<=len){
   
 if(str.charAt(i)== 1 || str.charAt(i)== 2||str.charAt(i)== 3 
 ||str.charAt(i)== 4 ||str.charAt(i)== 5||str.charAt(i)== 6||str.charAt(i)== 7||str.charAt(i)== 8||str.charAt(i)== 9||str.charAt(i)== 0){
myNumbers+=str.charAt(i) + "";
 }
  else if(strUpper.charAt(i)== "A" || strUpper.charAt(i)== "B"||strUpper.charAt(i)== "C" ||strUpper.charAt(i)== "D" 
 ||strUpper.charAt(i)== "E"||strUpper.charAt(i)== "F"||strUpper.charAt(i)== "G"||strUpper.charAt(i)== "H"||strUpper.charAt(i)== "I"
 ||strUpper.charAt(i)== "J"||strUpper.charAt(i)== "K"||strUpper.charAt(i)== "L"||strUpper.charAt(i)== "M"||strUpper.charAt(i)== "N"
 ||strUpper.charAt(i)== "O"||strUpper.charAt(i)== "P"||strUpper.charAt(i)== "Q"||strUpper.charAt(i)== "R"||strUpper.charAt(i)== "S"
 ||strUpper.charAt(i)== "T"||strUpper.charAt(i)== "U"||strUpper.charAt(i)== "V"
 ||strUpper.charAt(i)== "W"||strUpper.charAt(i)== "X"||strUpper.charAt(i)== "Y"||strUpper.charAt(i)== "Z"){
 
 
    myLetters+=strUpper.charAt(i) + "";
}else{
    mySpecialChar+=str.charAt(i)
}
i++
}
//split the input using string method split

//this is to print out all the numbers in the code
console.log(`There are ${(myNumbers.length)} numbers in your sentence/word. These numbers are: ${myNumbers}`)
//this is to print out all the letters in the code
console.log(`There are ${myLetters.length} letters in your sentence/word.These  Letters are: ${myLetters}`)
//this is to print out all the special Characters in the code
console.log(`There are ${mySpecialChar.length} special characters in your sentence/word.These characters: ${mySpecialChar}`)

