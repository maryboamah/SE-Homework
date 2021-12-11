
//function to find the a string and its position in an array

let myArray1= [1,2,3,4,5,6,"home","me","you",9,"soda"]
document.getElementById("myArray").innerHTML = myArray1

function findStrOrNum(myArray){
let str = document.getElementById("word").value

//iterate through the array
for(let i = 0; i<myArray.length; i++){

    //find words with type string and match user string
    if(typeof(myArray[i] )== "string" && (myArray[i].toUpperCase()==str.toUpperCase())){

        //get the position of the word
        let wordPosition = i
        
        return document.getElementById("result").innerHTML = "The position of your word " +"'"+str +"'" + " is " + (wordPosition+1)
    

    }
    //all other data types 
    else if((myArray[i]==str)){
        let numPosition = i
        return document.getElementById("result").innerHTML = "The position of your number " + "'"+str +"'" + " is " + (numPosition+1)
        
    } 
   
}
//if no condition is met
return  document.getElementById("result").innerHTML ="Your word/number " + "'"+str +"'"+" was Not found"

}

//function for user to add more words to the array
function addArray(array){
//get user array
let arr = document.getElementById("addarray").value
//make a new array with added string so it doesn
 newArray = array.push(arr)
 
 return document.getElementById("myArray").innerHTML = array
}







