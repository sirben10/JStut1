const textBox = document.getElementById("textBox");
const toCelsius = document.getElementById("toCelsius");
const toFahrenheit = document.getElementById("toFahrenheit");
const result = document.getElementById("result");

let temp;
function convert() {
    if (toCelsius.checked) {
        temp = Number(textBox.value - 32) * 5 / 9;
        result.textContent = `${textBox.value}°F is ${temp.toFixed(2)}°C`;
    } else if (toFahrenheit.checked) {
        temp = Number(textBox.value) * 9/5 + 32;
        result.textContent = `${textBox.value}°C is ${temp.toFixed(2)}°F`;
    }
    else {
        result.textContent = "Select a Unit";
    }
}