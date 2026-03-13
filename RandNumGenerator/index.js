const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 6;
let randomNum;

myButton.addEventListener("click", () => {
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    myLabel.textContent = randomNum;
});