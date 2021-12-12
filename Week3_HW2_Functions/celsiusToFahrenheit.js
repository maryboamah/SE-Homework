function celsiusToFahrenheit(){
    let celsius = document.getElementById("celsius").value
    let fahrenheit = (celsius * 9/5) + 32
    console.log(celsius)
    return document.getElementById("fahrenheit").innerHTML = `${celsius}&#8451; coverted to Fahrenheit is <span style="color: Blue"> ${fahrenheit}&#8457;</span`
}

function fahrenheitToCelsius(){
    let fahrenheit = document.getElementById("fahrenheitdegree").value
    let celsius = ((fahrenheit -32) *5/9).toFixed(2)
    console.log(celsius)
    return document.getElementById("celsiusdegree").innerHTML = `${fahrenheit}&#8457;  coverted to celsius is <span style="color: Blue"> ${celsius}&#8451;</span`
}