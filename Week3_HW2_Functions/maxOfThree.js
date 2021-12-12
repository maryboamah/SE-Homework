function maxOfThree(num1, num2,num3){
let maximum = Math.max(num1, num2, num3)
return document.getElementById("maxofthree").innerHTML  = `The maximum of these three numbers <span style="color:green">${num1}, ${num2} and ${num3}</span> is <span style="color:red">${maximum}</span>`
}

maxOfThree(Math.floor(Math.random()*100), Math.floor(Math.random()*100),Math.floor(Math.random()*100 ))