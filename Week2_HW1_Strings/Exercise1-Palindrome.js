//take user input
let prompt = require('prompt-sync')()
let str = prompt("Enter a anything ")

//reverse the string and store it in a variable called strReverse
let strReverse = "";
//get the length of the str
let len = str.length

for(let i= len; i>=0; i--){

    strReverse+=str.charAt(i)

}
console.log(strReverse)

if (strReverse === str) {
    console.log("This is a palindrome")
}else{
    console.log("This is not a palindrome")
}