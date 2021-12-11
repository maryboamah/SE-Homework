//setting up array 
let myaddElementArray = [1,2,4,4,6,5,8,10]

//variable to put sum of all arrays
let addedElement =0
function addElement(){
    for(let i = 0; i< myArray.length; i++){
        addedElement += myArray[i]
    }
    
}
//for loop to loop through all the arrays and add them to element

console.log("The sum of the elements in the array = " + addedElement)
document.getElementById("addelements").innerHTML = "The sum of the elements in the array " + myArray + " = " + addedElement