let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;
let gameOver = false;

function checkGuess() {
  if (attempts <= 0 || gameOver) return;

  attempts--;
  const inputElement = document.getElementById("guess");
  const feedbackElement = document.getElementById("feedback");
  const guess = Number(inputElement.value);
  
  if (isNaN(guess) || guess < 1 || guess > 100) {
    feedbackElement.innerHTML = "⚠️ Please enter a number between 1 and 100!";
    feedbackElement.style.color = "orange";
    return;
  }

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
