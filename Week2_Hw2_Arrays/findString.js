console.log("my")
let prompt = require('prompt-sync')()
let str = prompt("Enter a anything ")
let hisArray = [1,2,3,"me","him","them"]


function findStrOrNum(myArray){
    //iterate through the array
    for(let i = 0; i<myArray.length; i++){

        //find words with type string and match user string
        if(typeof(myArray[i] )== "string" && (myArray[i].toUpperCase()==str.toUpperCase())){

            //get the position of the word
            let wordPosition = i
            
            return "The position of your word " +"'"+str +"'" + " is " + (wordPosition+1)
          
    
    
        }
        //all other data types 
        else if((myArray[i]==str)){
            let numPosition = i
            return "The position of your number " + "'"+str +"'" + " is " + (numPosition+1)
            
        } 
       
    }
    //if no condition is met
    return  "Your word/number " + "'"+str +"'"+" was Not found"
}
console.log(findStrOrNum(hisArray))


