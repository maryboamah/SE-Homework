//Menu is from 1-5
//let user enter a menu option
//if user enters a menu other than 5
//let user chose digits foor the calculations

let prompt = require('prompt-sync')()
let chooseMenu = parseInt(prompt("Choose from the following Menu By number 1-5: \n MENU \n 1 = ADD \n 2 = SUBTRACT \n 3 = MULTIPLY \n 4 = DIVIDE \n 5 = EXIT \n"))

let userNumber1 
let userNumber2 

//Do something with user input through switch
switch (chooseMenu) {
    case 1:
         //get numbers from user for addition if option one is chosen
        userNumber1 = parseInt(prompt("Choose your first number for calculation "))
        userNumber2 = parseInt(prompt("Choose your second number for calculation "))
        //do the addition and display the result
        console.log(`The sum of ${userNumber1} and ${userNumber2} is ${userNumber1+userNumber2}`)
        break;
        case 2:
         //get numbers from user for substraction if option 2 is chosen
        userNumber1 = parseInt(prompt("Choose your first number for calculation "))
        userNumber2 = parseInt(prompt("Choose your second number for calculation "))
        //do the subtraction and display the result
        console.log(`The result of substractingg ${userNumber1} from ${userNumber2} is ${userNumber1-userNumber2}`)
        break;
        case 3:
            //get numbers from user for multiplication if option 3 is chosen
           userNumber1 = parseInt(prompt("Choose your first number for calculation "))
           userNumber2 = parseInt(prompt("Choose your second number for calculation "))
           //do the multiplication and display the result
           console.log(`The result of multiplying ${userNumber1} with ${userNumber2} is ${userNumber1*userNumber2}`)
           break;
           case 4:
         //get numbers from user for division if option 4 is chosen
        userNumber1 = parseInt(prompt("Choose your first number for calculation "))
        userNumber2 = parseInt(prompt("Choose your second number for calculation "))
        //do the addition and display the result
        console.log(`The sum of ${userNumber1} and ${userNumber2} is ${userNumber1+userNumber2}`)
        break;
        case 5:
         
        //do the division and display the result
        console.log('Thank you for using the app. Bye')
        break;
        default:
            console.log( 'Invalid Option') 
        break;
}