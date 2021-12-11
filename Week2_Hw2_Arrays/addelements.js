//setting up array 
let myaddElementArray = [1,2,4,4,6,5,8,10]
document.getElementById("addarray").innerHTML = myaddElementArray

//variable to put sum of all arrays

function addElement(array){
    let addedElement =0
    for(let i = 0; i< array.length; i++){
        addedElement += array[i]
        
    }
    return document.getElementById("addedelements").innerHTML = "The sum of the elements in the array " + array + " = " + addedElement 
}
//for loop to loop through all the arrays and add them to element

addElement(myaddElementArray)

//add more numbers

function addNumber(array){
    //get user array
    let arrNum = Number(document.getElementById("addelement").value)
  
    //make a new array with added string so it doesn
     newArray = array.push(arrNum)
  
     document.getElementById("addarray").innerHTML = array
     return addElement(array)
    }

