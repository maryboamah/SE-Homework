
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
userWord = userWord.replace(userWord.charAt(0), userWord.charAt(0).toUpperCase())
let userWordCapital =""


for(let i=0; i<userWord.length; i++ ){
        //only find index of spaces
        if(userWord.charAt(i) === " "){
            // make userCapital  this empty on each loop
            userWordCapital = ""
            //replace the word after space with capital
            userWordCapital = userWord.replace(userWord.charAt(i+1), userWord.charAt(i+1).toUpperCase())
          //console.log(userWord.charAt(i+1))
          
          //store that word in userWord
            userWord = userWordCapital
          //console.log(i)
        }
        
    
    }

    console.log(`This is the result from just using string methods  ${userWordCapital}`)