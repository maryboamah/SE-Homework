
//there is no method to capitalize
// take the first index and capitalize it
//add it back to the sentence
//look for space index with index of
//you could use split and loop through the arrays but we just want string methods

//This method is based on arrays
let prompt = require('prompt-sync')()
let userWord = prompt("Enter a any word or sentence to be capitalize: ")
let capitalizeWord = userWord.split(" ")
for(let i = 0; i<capitalizeWord.length; i++)
{
    capitalizeWord[i] = capitalizeWord[i][0].toUpperCase() + capitalizeWord[i].substr(1)

}

capitalizeWord.join(" ")
console.log(`This capitilizes words using array methods and this is the result ${capitalizeWord.toString()}`)


//Using just strings to achieve th esame thing