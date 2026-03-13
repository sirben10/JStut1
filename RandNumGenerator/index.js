const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min = 10000;
const max = 60000;
let randomNum;
let textBefore = 'AOE';
let year = new Date().getFullYear();

myButton.addEventListener("click", () => {
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    myLabel.textContent = textBefore + randomNum + year;
});