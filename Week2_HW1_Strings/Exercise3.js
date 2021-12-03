//give any input
//let user choose a letter or word
//loop through the sentence to find out how many times a word by the user happened in the sentence

//let set a variable to hold a sentence
//or you can change it to get sentence from command line

let mySentence = "Hello my name is sam and am from a place that is not famous but my name is simple" //let mySentence = prompt("Enter a any Sentence or word: ")

//get word from user to look for
let prompt = require('prompt-sync')()
let userWord = prompt("Enter a any word to look for in the sentence: ")

//lets store the length of the sentence
let sentenceLength = mySentence.length
//lets set the first index of the string to 0
let i = 0
//lets set a counter to hold the number of times we find the word
let wordCounter = 0;

//Lets loop through the sentence to find the word with a string search method (startswith)

while(i<=sentenceLength){
    if(mySentence.startsWith(userWord,i)){
        wordCounter+=1

    }
    i++
}

//Lets log the number of times a word occured
console.log(`Your word ${userWord} occured ${wordCounter} times in the sentence: ${mySentence}`)