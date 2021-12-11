//Write a program to find the longest element in a string array.
let myLongestWordArray = ["me","him","them", "happy","sad", "miracle", "Hovered", "Pink"]
//adding array to html document
document.getElementById("longestWordArray").innerHTML = "My Longest Word Array = " +myLongestWordArray
let myCountArray=[]

function findLongestWord(array){
    
    for(let i=0; i<array.length; i++){
     
        //change each element to string and find length and make another array called my count array made up of numbers
         myCountArray.push((array[i].toString()).length)
       
        }
         //find the highest number in that array which equals the highest word
        let high = Math.max.apply(Math, myCountArray)


//find the indexes of the highest number of strings
let allIndex = []
for(let j=0; j<myCountArray.length;j++){
    if(myCountArray[j] == high){
        allIndex.push(j)
        
    }
}

//use the index from the longest word to get all the words in your array with the same length
let allLongestWords =""
for(let k=0; k<allIndex.length;k++){
     allLongestWords +=  array[allIndex[k]] + ",  "
    
}

return  document.getElementById("myLongestWord").innerHTML = `The longest word(s) in the array is(are)   <span style=color:Red> ${allLongestWords}</span>`

}




//adding words by user

function addNewWord(array){
    //get user array
    let arr = document.getElementById("addlongword").value
    //make a new array with added string so it doesn
     newArray = array.push(arr)
     
      document.getElementById("longestWordArray").innerHTML = array

      return findLongestWord(array)
     
    }
    findLongestWord(myLongestWordArray)