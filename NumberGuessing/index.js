const minNumber = 50;
const maxNumber = 100;
const answer = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

let attempts = 0;
let guess;
let running = true;
const maxAttempts = 10;

while (running) {
    guess = parseInt(prompt(`Guess a number between ${minNumber} and ${maxNumber}:`));
   if (isNaN(guess)) {
        alert("Please enter a valid number.");
        continue;
    }
    else if (guess < minNumber || guess > maxNumber) {
        alert(`Please enter a number between ${minNumber} and ${maxNumber}.`);
        continue;
    }
    else{
        attempts++;
        if (guess === answer) {
            alert(`Congratulations! You've guessed the number ${answer} in ${attempts} attempts!`);
            running = false;
            // break;
        } else if (guess < answer) {
            alert("Too low! Try again.");
        } else {
            alert("Too high! Try again.");
        }
    }

}