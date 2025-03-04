let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;
let gameOver = false;
let guessList = [];

function checkGuess() {
  if (attempts <= 0 || gameOver) return;

  attempts--;
  const inputElement = document.getElementById("guess");
  const feedbackElement = document.getElementById("feedback");
  const previousGuessesElement = document.getElementById("previous-guesses");
  const guess = Number(inputElement.value);
  
  if (isNaN(guess) || guess < 1 || guess > 1000) {
    feedbackElement.innerHTML = "⚠️ Please enter a number between 1 and 100!";
    feedbackElement.style.color = "orange";
    return;
  }

  guessList.push(guess);
            const listItem = document.createElement("li");
            listItem.classList.add("list-group-item");
            listItem.textContent = `Attempt ${10 - attempts}: ${guess}`;
            previousGuessesElement.appendChild(listItem);
            inputElement.value = "";

  if (randomNumber === guess) {
    gameOver = true;
    feedbackElement.innerHTML = `🎉 Congratulations! You guessed it! The number was ${randomNumber}.`;
    feedbackElement.style.color = "green";
    inputElement.disabled = true;
    
    return;
  } else if (guess > randomNumber) {
    feedbackElement.innerHTML = `📉 Too high! Try again. Attempts left: ${attempts}`;
    feedbackElement.style.color = "red";
  } else {
    feedbackElement.innerHTML = `📈 Too low! Try again. Attempts left: ${attempts}`;
    feedbackElement.style.color = "red";
  }

  if (attempts === 0) {
    feedbackElement.innerHTML = `❌ No more attempts! The number was ${randomNumber}.`;
    feedbackElement.style.color = "red";
    inputElement.disabled = true;
    
  }
}

function addNumber(num) {
  const inputElement = document.getElementById("guess");
  inputElement.value += num;
}
