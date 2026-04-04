// COUNTER PROGRAM

// const decreaseBtn = document.getElementById('decrease');
// const resetBtn = document.getElementById('reset');
// const increaseBtn = document.getElementById('increase');
// const countLabel = document.getElementById('countLabel');
const decreaseBtn = document.querySelector('#decrease');
const resetBtn = document.querySelector('#reset');
const increaseBtn = document.querySelector('#increase');
const countLabel = document.querySelector('#countLabel');
let count = 0;
decreaseBtn.addEventListener('mousedown', () => {
    count--;
    countLabel.textContent = count;
});

// decreaseBtn.onclick = () => {
//     count--;
//     countLabel.textContent = count;
// }

increaseBtn.onclick = () => {
    count++;
    countLabel.textContent = count;
}

resetBtn.addEventListener('click', () => {
    count = 0;
    countLabel.textContent = count;
});
