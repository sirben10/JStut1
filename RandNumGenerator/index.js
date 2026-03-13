// const myButton = document.getElementById("myButton");
// const myLabel = document.getElementById("myLabel");
// const min = 10000;
// const max = 60000;
// let randomNum;
// let textBefore = 'AOE';
// let year = new Date().getFullYear();

// myButton.addEventListener("click", () => {
//     randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
//     myLabel.textContent = textBefore + randomNum + year;
// });

const myButton = document.querySelector("#myButton");
const label1 = document.querySelector("#label1");
const label2 = document.querySelector("#label2");
const label3 = document.querySelector("#label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.addEventListener("click", () => {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
});