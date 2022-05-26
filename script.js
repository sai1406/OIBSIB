function convertToFahrenheit() {
    let celsius = document.getElementById("inputDegree").value;
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("outputDegree").innerHTML = fahrenheit + "°F";

}
function convertToCelsius() {
    let fahrenheit = document.getElementById("inputDegree").value;
    let celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("outputDegree").innerHTML = celsius + "°C";

}
function resetDegree(){
    document.getElementById("inputDegree").value = '';
    document.getElementById("outputDegree").innerHTML = '';
}
