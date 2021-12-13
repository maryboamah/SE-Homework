let myArray = [3,"time", "forest","Best","tree","mouse","cat",4,900]
document.getElementById("display").innerHTML = "Array = ["+myArray + "]"

let mapArray = `<table> <tr><th>Array Value</th><th>Array Index</th></tr> `+ myArray.map(function(item, position) {
    return  `<tr><td>${item}</td><td>${position}`
    
}).join('') + `</td></tr></table>`

document.getElementById("arraymap").innerHTML +=mapArray