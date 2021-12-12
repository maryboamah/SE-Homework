function celsiusToFahrenheit(){
    let celsius = document.getElementById("celsius").value
    let fahrenheit = (celsius * 9/5) + 32
    console.log(celsius)
    return document.getElementById("fahrenheit").innerHTML = `${celsius} degree celsius coverted to Fahrenheit is <span style="color: Blue"> ${fahrenheit}</span`
}
