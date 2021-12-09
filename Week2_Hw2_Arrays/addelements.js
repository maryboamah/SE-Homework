//setting up array 
let myArray = [1,2,4,4,6,5,8,10]

//variable to put sum of all arrays
let addedElement =0

//for loop to loop through all the arrays and add them to element
for(let i = 0; i< myArray.length; i++){
    addedElement += myArray[i]
}
console.log("The sum of the elements in the array = " + addedElement)