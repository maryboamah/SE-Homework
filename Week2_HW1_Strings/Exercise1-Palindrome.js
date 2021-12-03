//take user input
let prompt = require('prompt-sync')()
let str = prompt("Enter a anything ")

//create a variable to hold reverse string starting with an empty string
let strReverse = "";

//get the length of the str
let len = str.length

for(let i= len; i>=0; i--){
//reverse the string and store in variable strReverse
    strReverse+=str.charAt(i)

}

//checking if reversed string is the same us the original str.
if (strReverse === str) {
    console.log("This is a palindrome")
}else{
    console.log("This is not a palindrome")
}